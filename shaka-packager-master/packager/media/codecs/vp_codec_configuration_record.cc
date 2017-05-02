// Copyright 2015 Google Inc. All rights reserved.
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

#include "packager/media/codecs/vp_codec_configuration_record.h"

#include "packager/base/strings/string_number_conversions.h"
#include "packager/base/strings/string_util.h"
#include "packager/media/base/bit_reader.h"
#include "packager/media/base/buffer_reader.h"
#include "packager/media/base/buffer_writer.h"
#include "packager/media/base/rcheck.h"
#include "packager/base/strings/stringprintf.h"

namespace shaka {
namespace media {
namespace {
enum VP9CodecFeatures {
  kFeatureProfile = 1,
  kFeatureLevel = 2,
  kFeatureBitDepth = 3,
  kFeatureChromaSubsampling = 4,
};

std::string VPCodecAsString(Codec codec) {
  switch (codec) {
    case kCodecVP8:
      return "vp08";
    case kCodecVP9:
      return "vp09";
    case kCodecVP10:
      return "vp10";
    default:
      LOG(WARNING) << "Unknown VP codec: " << codec;
      return std::string();
  }
}

template <typename T>
void MergeField(const std::string& name,
                const base::Optional<T>& source_value,
                base::Optional<T>* dest_value) {
  if (*dest_value) {
    if (source_value && *source_value != **dest_value) {
      LOG(WARNING) << "VPx " << name << " is inconsistent, "
                   << static_cast<int>(**dest_value) << " vs "
                   << static_cast<int>(*source_value);
    }
  } else {
    // Only set dest_value if it is not set.
    *dest_value = source_value;
  }
}

}  // namespace

VPCodecConfigurationRecord::VPCodecConfigurationRecord() {}

VPCodecConfigurationRecord::VPCodecConfigurationRecord(
    uint8_t profile,
    uint8_t level,
    uint8_t bit_depth,
    uint8_t chroma_subsampling,
    bool video_full_range_flag,
    uint8_t color_primaries,
    uint8_t transfer_characteristics,
    uint8_t matrix_coefficients,
    const std::vector<uint8_t>& codec_initialization_data)
    : profile_(profile),
      level_(level),
      bit_depth_(bit_depth),
      chroma_subsampling_(chroma_subsampling),
      video_full_range_flag_(video_full_range_flag),
      color_primaries_(color_primaries),
      transfer_characteristics_(transfer_characteristics),
      matrix_coefficients_(matrix_coefficients),
      codec_initialization_data_(codec_initialization_data) {}

VPCodecConfigurationRecord::~VPCodecConfigurationRecord(){};

// https://www.webmproject.org/vp9/mp4/
bool VPCodecConfigurationRecord::ParseMP4(const std::vector<uint8_t>& data) {
  BitReader reader(data.data(), data.size());
  uint8_t value;
  RCHECK(reader.ReadBits(8, &value));
  profile_ = value;
  RCHECK(reader.ReadBits(8, &value));
  level_ = value;
  RCHECK(reader.ReadBits(4, &value));
  bit_depth_ = value;
  RCHECK(reader.ReadBits(3, &value));
  chroma_subsampling_ = value;
  bool bool_value;
  RCHECK(reader.ReadBits(1, &bool_value));
  video_full_range_flag_ = bool_value;
  RCHECK(reader.ReadBits(8, &value));
  color_primaries_ = value;
  RCHECK(reader.ReadBits(8, &value));
  transfer_characteristics_ = value;
  RCHECK(reader.ReadBits(8, &value));
  matrix_coefficients_ = value;

  uint16_t codec_initialization_data_size = 0;
  RCHECK(reader.ReadBits(16, &codec_initialization_data_size));
  RCHECK(reader.bits_available() >= codec_initialization_data_size * 8u);
  const size_t header_size = data.size() - reader.bits_available() / 8;
  codec_initialization_data_.assign(
      data.begin() + header_size,
      data.begin() + header_size + codec_initialization_data_size);
  return true;
}

bool VPCodecConfigurationRecord::ParseWebM(const std::vector<uint8_t>& data) {
  BufferReader reader(data.data(), data.size());

  while (reader.HasBytes(1)) {
    uint8_t id;
    uint8_t size;
    RCHECK(reader.Read1(&id));
    RCHECK(reader.Read1(&size));

    uint8_t value = 0;
    switch (id) {
      case kFeatureProfile:
        RCHECK(size == 1);
        RCHECK(reader.Read1(&value));
        profile_ = value;
        break;
      case kFeatureLevel:
        RCHECK(size == 1);
        RCHECK(reader.Read1(&value));
        level_ = value;
        break;
      case kFeatureBitDepth:
        RCHECK(size == 1);
        RCHECK(reader.Read1(&value));
        bit_depth_ = value;
        break;
      case kFeatureChromaSubsampling:
        RCHECK(size == 1);
        RCHECK(reader.Read1(&value));
        chroma_subsampling_ = value;
        break;
      default: {
        LOG(WARNING) << "Skipping unknown VP9 codec feature " << id;
        RCHECK(reader.SkipBytes(size));
      }
    }
  }

  return true;
}

void VPCodecConfigurationRecord::WriteMP4(std::vector<uint8_t>* data) const {
  BufferWriter writer;
  writer.AppendInt(profile());
  writer.AppendInt(level());
  uint8_t bit_depth_chroma = (bit_depth() << 4) | (chroma_subsampling() << 1) |
                             (video_full_range_flag() ? 1 : 0);
  writer.AppendInt(bit_depth_chroma);
  writer.AppendInt(color_primaries());
  writer.AppendInt(transfer_characteristics());
  writer.AppendInt(matrix_coefficients());
  uint16_t codec_initialization_data_size =
    static_cast<uint16_t>(codec_initialization_data_.size());
  writer.AppendInt(codec_initialization_data_size);
  writer.AppendVector(codec_initialization_data_);
  writer.SwapBuffer(data);
}

void VPCodecConfigurationRecord::WriteWebM(std::vector<uint8_t>* data) const {
  BufferWriter writer;

  if (profile_) {
    writer.AppendInt(static_cast<uint8_t>(kFeatureProfile));  // ID = 1
    writer.AppendInt(static_cast<uint8_t>(1));                // Length = 1
    writer.AppendInt(*profile_);
  }

  if (level_) {
    writer.AppendInt(static_cast<uint8_t>(kFeatureLevel));  // ID = 2
    writer.AppendInt(static_cast<uint8_t>(1));  // Length = 1
    writer.AppendInt(*level_);
  }

  if (bit_depth_) {
    writer.AppendInt(static_cast<uint8_t>(kFeatureBitDepth));  // ID = 3
    writer.AppendInt(static_cast<uint8_t>(1));  // Length = 1
    writer.AppendInt(*bit_depth_);
  }

  if (chroma_subsampling_) {
    // ID = 4, Length = 1
    writer.AppendInt(static_cast<uint8_t>(kFeatureChromaSubsampling));
    writer.AppendInt(static_cast<uint8_t>(1));
    writer.AppendInt(*chroma_subsampling_);
  }

  writer.SwapBuffer(data);
}

std::string VPCodecConfigurationRecord::GetCodecString(Codec codec) const {
  const std::string fields[] = {
      base::IntToString(profile()),
      base::IntToString(level()),
      base::IntToString(bit_depth()),
      base::IntToString(chroma_subsampling()),
      base::IntToString(color_primaries()),
      base::IntToString(transfer_characteristics()),
      base::IntToString(matrix_coefficients()),
      (video_full_range_flag_ && *video_full_range_flag_) ? "01" : "00",
  };

  std::string codec_string = VPCodecAsString(codec);
  for (const std::string& field : fields) {
    // Make sure every field is at least 2-chars wide. The space will be
    // replaced with '0' afterwards.
    base::StringAppendF(&codec_string, ".%2s", field.c_str());
  }
  base::ReplaceChars(codec_string, " ", "0", &codec_string);
  return codec_string;
}

void VPCodecConfigurationRecord::MergeFrom(
    const VPCodecConfigurationRecord& other) {
  MergeField("profile", other.profile_, &profile_);
  MergeField("level", other.level_, &level_);
  MergeField("bit depth", other.bit_depth_, &bit_depth_);
  MergeField("chroma subsampling", other.chroma_subsampling_,
             &chroma_subsampling_);
  MergeField("video full range flag", other.video_full_range_flag_,
             &video_full_range_flag_);
  MergeField("color primaries", other.color_primaries_, &color_primaries_);
  MergeField("transfer characteristics", other.transfer_characteristics_,
             &transfer_characteristics_);
  MergeField("matrix coefficients", other.matrix_coefficients_,
             &matrix_coefficients_);

  if (codec_initialization_data_.empty() ||
      !other.codec_initialization_data_.empty()) {
    if (!codec_initialization_data_.empty() &&
        codec_initialization_data_ != other.codec_initialization_data_) {
      LOG(WARNING) << "VPx codec initialization data is inconsistent";
    }
    codec_initialization_data_ = other.codec_initialization_data_;
  }
}

}  // namespace media
}  // namespace shaka
