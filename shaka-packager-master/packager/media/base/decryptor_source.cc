// Copyright 2016 Google Inc. All rights reserved.
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

#include "packager/media/base/decryptor_source.h"

#include "packager/base/logging.h"
#include "packager/media/base/aes_decryptor.h"
#include "packager/media/base/aes_pattern_cryptor.h"

namespace shaka {
namespace media {

DecryptorSource::DecryptorSource(KeySource* key_source)
    : key_source_(key_source) {
  CHECK(key_source);
}
DecryptorSource::~DecryptorSource() {}

bool DecryptorSource::DecryptSampleBuffer(const DecryptConfig* decrypt_config,
                                          uint8_t* buffer,
                                          size_t buffer_size) {
  DCHECK(decrypt_config);
  DCHECK(buffer);

  // Get the decryptor object.
  AesCryptor* decryptor = nullptr;
  auto found = decryptor_map_.find(decrypt_config->key_id());
  if (found == decryptor_map_.end()) {
    // Create new AesDecryptor based on decryption mode.
    EncryptionKey key;
    Status status(key_source_->GetKey(decrypt_config->key_id(), &key));
    if (!status.ok()) {
      LOG(ERROR) << "Error retrieving decryption key: " << status;
      return false;
    }

    std::unique_ptr<AesCryptor> aes_decryptor;
    switch (decrypt_config->protection_scheme()) {
      case FOURCC_cenc:
        aes_decryptor.reset(new AesCtrDecryptor);
        break;
      case FOURCC_cbc1:
        aes_decryptor.reset(new AesCbcDecryptor(kNoPadding));
        break;
      case FOURCC_cens:
        aes_decryptor.reset(new AesPatternCryptor(
            decrypt_config->crypt_byte_block(),
            decrypt_config->skip_byte_block(),
            AesPatternCryptor::kEncryptIfCryptByteBlockRemaining,
            AesCryptor::kDontUseConstantIv,
            std::unique_ptr<AesCryptor>(new AesCtrDecryptor())));
        break;
      case FOURCC_cbcs:
        aes_decryptor.reset(new AesPatternCryptor(
            decrypt_config->crypt_byte_block(),
            decrypt_config->skip_byte_block(),
            AesPatternCryptor::kEncryptIfCryptByteBlockRemaining,
            AesCryptor::kUseConstantIv,
            std::unique_ptr<AesCryptor>(new AesCbcDecryptor(kNoPadding))));
        break;
      default:
        LOG(ERROR) << "Unsupported protection scheme: "
                   << decrypt_config->protection_scheme();
        return false;
    }

    if (!aes_decryptor->InitializeWithIv(key.key, decrypt_config->iv())) {
      LOG(ERROR) << "Failed to initialize AesDecryptor for decryption.";
      return false;
    }
    decryptor = aes_decryptor.get();
    decryptor_map_[decrypt_config->key_id()] = std::move(aes_decryptor);
  } else {
    decryptor = found->second.get();
  }
  if (!decryptor->SetIv(decrypt_config->iv())) {
    LOG(ERROR) << "Invalid initialization vector.";
    return false;
  }

  if (decrypt_config->subsamples().empty()) {
    // Sample not encrypted using subsample encryption. Decrypt whole.
    if (!decryptor->Crypt(buffer, buffer_size, buffer)) {
      LOG(ERROR) << "Error during bulk sample decryption.";
      return false;
    }
    return true;
  }

  // Subsample decryption.
  const std::vector<SubsampleEntry>& subsamples = decrypt_config->subsamples();
  uint8_t* current_ptr = buffer;
  const uint8_t* const buffer_end = buffer + buffer_size;
  for (const auto& subsample : subsamples) {
    if ((current_ptr + subsample.clear_bytes + subsample.cipher_bytes) >
        buffer_end) {
      LOG(ERROR) << "Subsamples overflow sample buffer.";
      return false;
    }
    current_ptr += subsample.clear_bytes;
    if (!decryptor->Crypt(current_ptr, subsample.cipher_bytes, current_ptr)) {
      LOG(ERROR) << "Error decrypting subsample buffer.";
      return false;
    }
    current_ptr += subsample.cipher_bytes;
  }
  return true;
}

}  // namespace media
}  // namespace shaka
