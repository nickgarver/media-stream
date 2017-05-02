// Copyright 2016 Google Inc. All rights reserved.
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

#ifndef PACKAGER_HLS_BASE_HLS_NOTIFIER_H_
#define PACKAGER_HLS_BASE_HLS_NOTIFIER_H_

#include <string>
#include <vector>

#include "packager/mpd/base/media_info.pb.h"

namespace shaka {
namespace hls {

// TODO(rkuroiwa): Consider merging this with MpdNotifier.
class HlsNotifier {
 public:
  enum class HlsProfile {
    kOnDemandProfile,
    kLiveProfile,
  };

  explicit HlsNotifier(HlsProfile profile) : profile_(profile) {}
  virtual ~HlsNotifier() {}

  /// Intialize the notifier.
  /// @return true on sucess, false otherwise.
  virtual bool Init() = 0;

  /// @param media_info specifies the stream.
  /// @param playlist_name is the name of the playlist that this stream should
  ///        go.
  /// @param stream_name is the name of this stream.
  /// @param group_id is the group ID for this stream.
  /// @param stream_id is set to a value so that it can be used to call the
  ///        other methods. If this returns false, the stream_id may be set to
  ///        an invalid value.
  /// @return true on sucess, false otherwise.
  virtual bool NotifyNewStream(const MediaInfo& media_info,
                               const std::string& playlist_name,
                               const std::string& stream_name,
                               const std::string& group_id,
                               uint32_t* stream_id) = 0;

  // |stream_id| is the value set by NotifyNewStream().
  // |segment_name| is the name of the new segment.
  // |start_time| is the start time of the segment in terms of timescale passed
  // in |media_info|.
  // |duration| is also in terms of timescale.
  // |size| is the size in bytes.
  virtual bool NotifyNewSegment(uint32_t stream_id,
                                const std::string& segment_name,
                                uint64_t start_time,
                                uint64_t duration,
                                uint64_t size) = 0;

  /// @param stream_id is the value set by NotifyNewStream().
  /// @param key_id is the key ID for the stream.
  /// @param system_id is the DRM system ID in e.g. PSSH boxes. For example this
  ///        can be used to determine the KEYFORMAT attribute for EXT-X-KEY.
  /// @param iv is the new initialization vector.
  /// @param protection_system_specific_data is the DRM specific data. The
  ///        interpretation of this data is up to the implementation, possibly
  ///        using @a system_id to determine how to interpret the data.
  virtual bool NotifyEncryptionUpdate(
      uint32_t stream_id,
      const std::vector<uint8_t>& key_id,
      const std::vector<uint8_t>& system_id,
      const std::vector<uint8_t>& iv,
      const std::vector<uint8_t>& protection_system_specific_data) = 0;

  /// Process any current buffered states/resources.
  /// @return true on success, false otherwise.
  virtual bool Flush() = 0;

 protected:
  HlsProfile profile() const { return profile_; }

 private:
  HlsProfile profile_;
};

}  // namespace hls
}  // namespace shaka
#endif  // PACKAGER_HLS_BASE_HLS_NOTIFIER_H_
