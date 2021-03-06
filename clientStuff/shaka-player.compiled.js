(function() {
  var g = {};
  (function(window) {
    var k, aa = this;
    aa.ld = !0;

    function m(a, b) {
      var c = a.split("."),
        d = aa;
      c[0] in d || !d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    }

    function ba(a) {
      var b = p;

      function c() {}
      c.prototype = b.prototype;
      a.sd = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.md = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
      }
    };
    /*

     Copyright 2016 Google Inc.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function ca(a) {
      this.c = Math.exp(Math.log(.5) / a);
      this.b = this.a = 0
    }

    function da(a, b, c) {
      var d = Math.pow(a.c, b);
      c = c * (1 - d) + d * a.a;
      isNaN(c) || (a.a = c, a.b += b)
    }

    function ea(a) {
      return a.a / (1 - Math.pow(a.c, a.b))
    };

    function fa() {
      this.c = new ca(2);
      this.f = new ca(5);
      this.a = 0;
      this.b = 5E5
    }
    fa.prototype.setDefaultEstimate = function(a) {
      this.b = a
    };
    fa.prototype.getBandwidthEstimate = function() {
      return 128E3 > this.a ? this.b : Math.min(ea(this.c), ea(this.f))
    };

    function ga() {}

    function ha() {};

    function q() {
      this.g = null;
      this.f = !1;
      this.b = new fa;
      this.h = {};
      this.a = {};
      this.i = !1;
      this.c = null
    }
    m("shaka.abr.SimpleAbrManager", q);
    q.prototype.stop = function() {
      this.g = null;
      this.f = !1;
      this.h = {};
      this.a = {};
      this.c = null
    };
    q.prototype.stop = q.prototype.stop;
    q.prototype.init = function(a) {
      this.g = a
    };
    q.prototype.init = q.prototype.init;
    q.prototype.chooseStreams = function(a) {
      for (var b in a) this.h[b] = a[b];
      b = {};
      if ("audio" in a) {
        var c = ia(this);
        c ? (b.audio = c, this.a.audio = c) : delete this.a.audio
      }
      "video" in a && ((c = ja(this)) ? (b.video = c, this.a.video = c) : delete this.a.video);
      "text" in a && (b.text = a.text.streams[0]);
      this.c = Date.now();
      return b
    };
    q.prototype.chooseStreams = q.prototype.chooseStreams;
    q.prototype.enable = function() {
      this.f = !0
    };
    q.prototype.enable = q.prototype.enable;
    q.prototype.disable = function() {
      this.f = !1
    };
    q.prototype.disable = q.prototype.disable;
    q.prototype.segmentDownloaded = function(a, b, c) {
      var d = this.b;
      b -= a;
      16E3 > c || (a = 8E3 * c / b, b /= 1E3, d.a += c, da(d.c, b, a), da(d.f, b, a));
      if (null != this.c && this.f) a: {
        if (!this.i) {
          if (!(128E3 <= this.b.a)) break a;
          this.i = !0
        } else if (8E3 > Date.now() - this.c) break a;c = {};
        if (d = ia(this)) c.audio = d,
        this.a.audio = d;
        if (d = ja(this)) c.video = d,
        this.a.video = d;this.c = Date.now();this.b.getBandwidthEstimate();this.g(c)
      }
    };
    q.prototype.segmentDownloaded = q.prototype.segmentDownloaded;
    q.prototype.getBandwidthEstimate = function() {
      return this.b.getBandwidthEstimate()
    };
    q.prototype.getBandwidthEstimate = q.prototype.getBandwidthEstimate;
    q.prototype.setDefaultEstimate = function(a) {
      this.b.setDefaultEstimate(a)
    };
    q.prototype.setDefaultEstimate = q.prototype.setDefaultEstimate;

    function ia(a) {
      a = a.h.audio;
      if (!a) return null;
      a = ka(a);
      return a[Math.floor(a.length / 2)]
    }

    function ja(a) {
      var b = a.h.video;
      if (!b) return null;
      var b = ka(b),
        c = a.a.audio,
        c = c && c.bandwidth || 0;
      a = a.b.getBandwidthEstimate();
      for (var d = b[0], e = 0; e < b.length; ++e) {
        var f = b[e];
        if (f.bandwidth) {
          var g = ((e + 1 < b.length ? b[e + 1] : {
            bandwidth: Infinity
          }).bandwidth + c) / .85;
          a >= (f.bandwidth + c) / .95 && a <= g && (d = f)
        }
      }
      return d
    }

    function ka(a) {
      return a.streams.slice(0).filter(function(a) {
        return a.allowedByApplication && a.allowedByKeySystem
      }).sort(function(a, c) {
        return a.bandwidth - c.bandwidth
      })
    };

    function t(a, b) {
      var c = b || {},
        d;
      for (d in c) this[d] = c[d];
      this.defaultPrevented = this.cancelable = this.bubbles = !1;
      this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
      this.type = a;
      this.isTrusted = !1;
      this.target = this.currentTarget = null;
      this.a = !1
    }
    t.prototype.preventDefault = function() {};
    t.prototype.stopImmediatePropagation = function() {
      this.a = !0
    };
    t.prototype.stopPropagation = function() {};
    var la = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
      ma = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
      na = ["loop", "playbackRate"],
      oa = ["pause", "play"],
      pa = "adaptation buffering emsg error loading unloading texttrackvisibility trackschanged".split(" "),
      qa = "drmInfo getConfiguration getManifestUri getPlaybackRate getTracks getStats isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(" "),
      ra = [
        ["getConfiguration", "configure"]
      ],
      sa = [
        ["isTextTrackVisible", "setTextTrackVisibility"]
      ],
      ta = "addTextTrack cancelTrickPlay configure resetConfiguration selectTrack setTextTrackVisibility trickPlay".split(" "),
      ua = ["load", "unload"];

    function va(a) {
      return JSON.stringify(a, function(a, c) {
        if ("manager" != a && "function" != typeof c) {
          if (c instanceof Event || c instanceof t) {
            var b = {},
              e;
            for (e in c) {
              var f = c[e];
              f && "object" == typeof f || e in Event || (b[e] = f)
            }
            return b
          }
          if (c instanceof TimeRanges)
            for (b = {
                __type__: "TimeRanges",
                length: c.length,
                start: [],
                end: []
              }, e = 0; e < c.length; ++e) b.start.push(c.start(e)), b.end.push(c.end(e));
          else b = "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
          return b
        }
      })
    }

    function wa(a) {
      return JSON.parse(a, function(a, c) {
        return "NaN" == c ? NaN : "-Infinity" == c ? -Infinity : "Infinity" == c ? Infinity : c && "object" == typeof c && "TimeRanges" == c.__type__ ? xa(c) : c
      })
    }

    function xa(a) {
      return {
        length: a.length,
        start: function(b) {
          return a.start[b]
        },
        end: function(b) {
          return a.end[b]
        }
      }
    };

    function v(a, b, c) {
      this.category = a;
      this.code = b;
      this.data = Array.prototype.slice.call(arguments, 2)
    }
    m("shaka.util.Error", v);
    v.prototype.toString = function() {
      return "shaka.util.Error " + JSON.stringify(this, null, "  ")
    };
    v.Category = {
      NETWORK: 1,
      TEXT: 2,
      MEDIA: 3,
      MANIFEST: 4,
      STREAMING: 5,
      DRM: 6,
      PLAYER: 7,
      CAST: 8,
      STORAGE: 9
    };
    v.Code = {
      UNSUPPORTED_SCHEME: 1E3,
      BAD_HTTP_STATUS: 1001,
      HTTP_ERROR: 1002,
      TIMEOUT: 1003,
      MALFORMED_DATA_URI: 1004,
      UNKNOWN_DATA_URI_ENCODING: 1005,
      INVALID_TEXT_HEADER: 2E3,
      INVALID_TEXT_CUE: 2001,
      UNABLE_TO_DETECT_ENCODING: 2003,
      BAD_ENCODING: 2004,
      INVALID_XML: 2005,
      INVALID_TTML: 2006,
      INVALID_MP4_TTML: 2007,
      INVALID_MP4_VTT: 2008,
      BUFFER_READ_OUT_OF_BOUNDS: 3E3,
      JS_INTEGER_OVERFLOW: 3001,
      EBML_OVERFLOW: 3002,
      EBML_BAD_FLOATING_POINT_SIZE: 3003,
      MP4_SIDX_WRONG_BOX_TYPE: 3004,
      MP4_SIDX_INVALID_TIMESCALE: 3005,
      MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
      WEBM_CUES_ELEMENT_MISSING: 3007,
      WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
      WEBM_SEGMENT_ELEMENT_MISSING: 3009,
      WEBM_INFO_ELEMENT_MISSING: 3010,
      WEBM_DURATION_ELEMENT_MISSING: 3011,
      WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
      WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
      MEDIA_SOURCE_OPERATION_FAILED: 3014,
      MEDIA_SOURCE_OPERATION_THREW: 3015,
      VIDEO_ERROR: 3016,
      QUOTA_EXCEEDED_ERROR: 3017,
      UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
      DASH_INVALID_XML: 4001,
      DASH_NO_SEGMENT_INFO: 4002,
      DASH_EMPTY_ADAPTATION_SET: 4003,
      DASH_EMPTY_PERIOD: 4004,
      DASH_WEBM_MISSING_INIT: 4005,
      DASH_UNSUPPORTED_CONTAINER: 4006,
      DASH_PSSH_BAD_ENCODING: 4007,
      DASH_NO_COMMON_KEY_SYSTEM: 4008,
      DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
      DASH_CONFLICTING_KEY_IDS: 4010,
      UNPLAYABLE_PERIOD: 4011,
      RESTRICTIONS_CANNOT_BE_MET: 4012,
      NO_PERIODS: 4014,
      DASH_DUPLICATE_REPRESENTATION_ID: 4018,
      INVALID_STREAMS_CHOSEN: 5005,
      NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
      REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
      FAILED_TO_CREATE_CDM: 6002,
      FAILED_TO_ATTACH_TO_VIDEO: 6003,
      INVALID_SERVER_CERTIFICATE: 6004,
      FAILED_TO_CREATE_SESSION: 6005,
      FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
      LICENSE_REQUEST_FAILED: 6007,
      LICENSE_RESPONSE_REJECTED: 6008,
      ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
      NO_LICENSE_SERVER_GIVEN: 6012,
      OFFLINE_SESSION_REMOVED: 6013,
      EXPIRED: 6014,
      LOAD_INTERRUPTED: 7E3,
      CAST_API_UNAVAILABLE: 8E3,
      NO_CAST_RECEIVERS: 8001,
      ALREADY_CASTING: 8002,
      UNEXPECTED_CAST_ERROR: 8003,
      CAST_CANCELED_BY_USER: 8004,
      CAST_CONNECTION_TIMED_OUT: 8005,
      CAST_RECEIVER_APP_UNAVAILABLE: 8006,
      INDEXED_DB_NOT_SUPPORTED: 9E3,
      INDEXED_DB_ERROR: 9001,
      OPERATION_ABORTED: 9002,
      REQUESTED_ITEM_NOT_FOUND: 9003,
      MALFORMED_OFFLINE_URI: 9004,
      CANNOT_STORE_LIVE_OFFLINE: 9005,
      STORE_ALREADY_IN_PROGRESS: 9006,
      NO_INIT_DATA_FOR_OFFLINE: 9007
    };

    function w() {
      var a, b, c = new Promise(function(c, e) {
        a = c;
        b = e
      });
      c.resolve = a;
      c.reject = b;
      return c
    };

    function ya(a, b, c, d, e) {
      this.C = a;
      this.l = b;
      this.w = c;
      this.B = d;
      this.s = e;
      this.f = this.j = this.g = !1;
      this.v = "";
      this.a = this.i = null;
      this.b = {
        video: {},
        player: {}
      };
      this.m = 0;
      this.c = {};
      this.h = null
    }
    k = ya.prototype;
    k.o = function() {
      za(this);
      this.a && (this.a.stop(function() {}, function() {}), this.a = null);
      this.B = this.w = this.l = null;
      this.f = this.j = this.g = !1;
      this.h = this.c = this.b = this.a = this.i = null;
      return Promise.resolve()
    };
    k.N = function() {
      return this.f
    };
    k.bb = function() {
      return this.v
    };
    k.init = function() {
      if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
        delete window.__onGCastApiAvailable;
        this.g = !0;
        this.l();
        var a = new chrome.cast.SessionRequest(this.C),
          a = new chrome.cast.ApiConfig(a, this.jc.bind(this), this.qc.bind(this), "origin_scoped");
        chrome.cast.initialize(a, function() {}, function() {})
      } else window.__onGCastApiAvailable = function(a) {
        a && this.init()
      }.bind(this)
    };
    k.eb = function(a) {
      this.i = a;
      this.f && Aa(this, {
        type: "appData",
        appData: this.i
      })
    };
    k.cast = function(a) {
      if (!this.g) return Promise.reject(new v(8, 8E3));
      if (!this.j) return Promise.reject(new v(8, 8001));
      if (this.f) return Promise.reject(new v(8, 8002));
      this.h = new w;
      chrome.cast.requestSession(this.$a.bind(this, a), this.ub.bind(this));
      return this.h
    };
    k.get = function(a, b) {
      if ("video" == a) {
        if (0 <= oa.indexOf(b)) return this.Fb.bind(this, a, b)
      } else if ("player" == a) {
        if (0 <= ta.indexOf(b)) return this.Fb.bind(this, a, b);
        if (0 <= ua.indexOf(b)) return this.Fc.bind(this, a, b);
        if (0 <= qa.indexOf(b)) return this.Cb.bind(this, a, b)
      }
      return this.Cb(a, b)
    };
    k.set = function(a, b, c) {
      this.b[a][b] = c;
      Aa(this, {
        type: "set",
        targetName: a,
        property: b,
        value: c
      })
    };
    k.$a = function(a, b) {
      this.a = b;
      this.a.addUpdateListener(this.vb.bind(this));
      this.a.addMessageListener("urn:x-cast:com.google.shaka.v2", this.kc.bind(this));
      this.vb();
      Aa(this, {
        type: "init",
        initState: a,
        appData: this.i
      });
      this.h.resolve()
    };
    k.ub = function(a) {
      var b = 8003;
      switch (a.code) {
        case "cancel":
          b = 8004;
          break;
        case "timeout":
          b = 8005;
          break;
        case "receiver_unavailable":
          b = 8006
      }
      this.h.reject(new v(8, b, a))
    };
    k.Cb = function(a, b) {
      return this.b[a][b]
    };
    k.Fb = function(a, b) {
      Aa(this, {
        type: "call",
        targetName: a,
        methodName: b,
        args: Array.prototype.slice.call(arguments, 2)
      })
    };
    k.Fc = function(a, b) {
      var c = Array.prototype.slice.call(arguments, 2),
        d = new w,
        e = this.m.toString();
      this.m++;
      this.c[e] = d;
      Aa(this, {
        type: "asyncCall",
        targetName: a,
        methodName: b,
        args: c,
        id: e
      });
      return d
    };
    k.jc = function(a) {
      var b = this.s();
      this.h = new w;
      this.$a(b, a)
    };
    k.qc = function(a) {
      this.j = "available" == a;
      this.l()
    };
    k.vb = function() {
      var a = this.a ? "connected" == this.a.status : !1;
      if (this.f && !a) {
        this.B();
        for (var b in this.b) this.b[b] = {};
        za(this)
      }
      this.v = (this.f = a) ? this.a.receiver.friendlyName : "";
      this.l()
    };

    function za(a) {
      for (var b in a.c) {
        var c = a.c[b];
        delete a.c[b];
        c.reject(new v(7, 7E3))
      }
    }
    k.kc = function(a, b) {
      var c = wa(b);
      switch (c.type) {
        case "event":
          var d = c.targetName,
            e = c.event;
          this.w(d, new t(e.type, e));
          break;
        case "update":
          e = c.update;
          for (d in e) {
            var c = this.b[d] || {},
              f;
            for (f in e[d]) c[f] = e[d][f]
          }
          break;
        case "asyncComplete":
          if (d = c.id, f = c.error, c = this.c[d], delete this.c[d], c)
            if (f) {
              d = new v(f.category, f.code);
              for (e in f) d[e] = f[e];
              c.reject(d)
            } else c.resolve()
      }
    };

    function Aa(a, b) {
      var c = va(b);
      a.a.sendMessage("urn:x-cast:com.google.shaka.v2", c, function() {}, ga)
    };

    function Ba() {
      this.a = {}
    }
    k = Ba.prototype;
    k.push = function(a, b) {
      this.a.hasOwnProperty(a) ? this.a[a].push(b) : this.a[a] = [b]
    };
    k.set = function(a, b) {
      this.a[a] = b
    };
    k.has = function(a) {
      return this.a.hasOwnProperty(a)
    };
    k.get = function(a) {
      return (a = this.a[a]) ? a.slice() : null
    };
    k.remove = function(a, b) {
      var c = this.a[a];
      if (c)
        for (var d = 0; d < c.length; ++d) c[d] == b && (c.splice(d, 1), --d)
    };
    k.keys = function() {
      var a = [],
        b;
      for (b in this.a) a.push(b);
      return a
    };

    function x() {
      this.a = new Ba
    }
    x.prototype.o = function() {
      Ca(this);
      this.a = null;
      return Promise.resolve()
    };

    function y(a, b, c, d) {
      b = new Da(b, c, d);
      a.a.push(c, b)
    }
    x.prototype.ka = function(a, b) {
      for (var c = this.a.get(b) || [], d = 0; d < c.length; ++d) {
        var e = c[d];
        e.target == a && (e.ka(), this.a.remove(b, e))
      }
    };

    function Ca(a) {
      var b = a.a,
        c = [],
        d;
      for (d in b.a) c.push.apply(c, b.a[d]);
      for (b = 0; b < c.length; ++b) c[b].ka();
      a.a.a = {}
    }

    function Da(a, b, c) {
      this.target = a;
      this.type = b;
      this.a = c;
      this.target.addEventListener(b, c, !1)
    }
    Da.prototype.ka = function() {
      this.target && (this.target.removeEventListener(this.type, this.a, !1), this.a = this.target = null)
    };

    function p() {
      this.Ba = new Ba;
      this.X = this
    }
    p.prototype.addEventListener = function(a, b) {
      this.Ba.push(a, b)
    };
    p.prototype.removeEventListener = function(a, b) {
      this.Ba.remove(a, b)
    };
    p.prototype.dispatchEvent = function(a) {
      for (var b = this.Ba.get(a.type) || [], c = 0; c < b.length; ++c) {
        a.target = this.X;
        a.currentTarget = this.X;
        var d = b[c];
        try {
          d.handleEvent ? d.handleEvent(a) : d.call(this, a)
        } catch (e) {}
        if (a.a) break
      }
      return a.defaultPrevented
    };

    function z(a, b, c) {
      p.call(this);
      this.c = a;
      this.b = b;
      this.i = this.f = this.g = this.j = this.l = null;
      this.a = new ya(c, this.Uc.bind(this), this.Vc.bind(this), this.Wc.bind(this), this.qb.bind(this));
      Ea(this)
    }
    ba(z);
    m("shaka.cast.CastProxy", z);
    z.prototype.o = function() {
      var a = [this.i ? this.i.o() : null, this.b ? this.b.o() : null, this.a ? this.a.o() : null];
      this.a = this.i = this.j = this.l = this.b = this.c = null;
      return Promise.all(a)
    };
    z.prototype.destroy = z.prototype.o;
    z.prototype.bc = function() {
      return this.l
    };
    z.prototype.getVideo = z.prototype.bc;
    z.prototype.$b = function() {
      return this.j
    };
    z.prototype.getPlayer = z.prototype.$b;
    z.prototype.Qb = function() {
      return this.a ? this.a.g && this.a.j : !1
    };
    z.prototype.canCast = z.prototype.Qb;
    z.prototype.N = function() {
      return this.a ? this.a.N() : !1
    };
    z.prototype.isCasting = z.prototype.N;
    z.prototype.bb = function() {
      return this.a ? this.a.bb() : ""
    };
    z.prototype.receiverName = z.prototype.bb;
    z.prototype.cast = function() {
      var a = this.qb();
      return this.a.cast(a).then(function() {
        return this.b.jb()
      }.bind(this))
    };
    z.prototype.cast = z.prototype.cast;
    z.prototype.eb = function(a) {
      this.a.eb(a)
    };
    z.prototype.setAppData = z.prototype.eb;
    z.prototype.bd = function() {
      var a = this.a;
      if (a.f) {
        var b = a.s();
        chrome.cast.requestSession(a.$a.bind(a, b), a.ub.bind(a))
      }
    };
    z.prototype.suggestDisconnect = z.prototype.bd;

    function Ea(a) {
      a.a.init();
      a.i = new x;
      la.forEach(function(a) {
        y(this.i, this.c, a, this.jd.bind(this))
      }.bind(a));
      pa.forEach(function(a) {
        y(this.i, this.b, a, this.Bc.bind(this))
      }.bind(a));
      a.l = {};
      for (var b in a.c) Object.defineProperty(a.l, b, {
        configurable: !1,
        enumerable: !0,
        get: a.hd.bind(a, b),
        set: a.kd.bind(a, b)
      });
      a.j = {};
      for (b in a.b) Object.defineProperty(a.j, b, {
        configurable: !1,
        enumerable: !0,
        get: a.Ac.bind(a, b)
      });
      a.g = new p;
      a.g.X = a.l;
      a.f = new p;
      a.f.X = a.j
    }
    k = z.prototype;
    k.qb = function() {
      var a = {
        video: {},
        player: {},
        playerAfterLoad: {},
        manifest: this.b.pa,
        startTime: null
      };
      this.c.pause();
      na.forEach(function(b) {
        a.video[b] = this.c[b]
      }.bind(this));
      this.c.ended || (a.startTime = this.c.currentTime);
      ra.forEach(function(b) {
        var c = b[1];
        b = this.b[b[0]]();
        a.player[c] = b
      }.bind(this));
      sa.forEach(function(b) {
        var c = b[1];
        b = this.b[b[0]]();
        a.playerAfterLoad[c] = b
      }.bind(this));
      return a
    };
    k.Uc = function() {
      this.dispatchEvent(new t("caststatuschanged"))
    };
    k.Wc = function() {
      ra.forEach(function(a) {
        var b = a[1];
        a = this.a.get("player", a[0])();
        this.b[b](a)
      }.bind(this));
      var a = this.a.get("player", "getManifestUri")(),
        b = this.a.get("video", "ended"),
        c = Promise.resolve(),
        d = this.c.autoplay,
        e = null;
      b || (e = this.a.get("video", "currentTime"));
      a && (this.c.autoplay = !1, c = this.b.load(a, e), c["catch"](function(a) {
        this.b.dispatchEvent(new t("error", {
          detail: a
        }))
      }.bind(this)));
      var f = {};
      na.forEach(function(a) {
        f[a] = this.a.get("video", a)
      }.bind(this));
      c.then(function() {
        na.forEach(function(a) {
          this.c[a] =
            f[a]
        }.bind(this));
        sa.forEach(function(a) {
          var b = a[1];
          a = this.a.get("player", a[0])();
          this.b[b](a)
        }.bind(this));
        this.c.autoplay = d;
        a && this.c.play()
      }.bind(this))
    };
    k.hd = function(a) {
      if ("addEventListener" == a) return this.g.addEventListener.bind(this.g);
      if ("removeEventListener" == a) return this.g.removeEventListener.bind(this.g);
      if (this.a.N() && !Object.keys(this.a.b.video).length) {
        var b = this.c[a];
        if ("function" != typeof b) return b
      }
      return this.a.N() ? this.a.get("video", a) : (b = this.c[a], "function" == typeof b && (b = b.bind(this.c)), b)
    };
    k.kd = function(a, b) {
      this.a.N() ? this.a.set("video", a, b) : this.c[a] = b
    };
    k.jd = function(a) {
      this.a.N() || this.g.dispatchEvent(new t(a.type, a))
    };
    k.Ac = function(a) {
      return "addEventListener" == a ? this.f.addEventListener.bind(this.f) : "removeEventListener" == a ? this.f.removeEventListener.bind(this.f) : "getNetworkingEngine" == a ? this.b.rb.bind(this.b) : this.a.N() && !Object.keys(this.a.b.video).length && 0 <= qa.indexOf(a) || !this.a.N() ? (a = this.b[a], a.bind(this.b)) : this.a.get("player", a)
    };
    k.Bc = function(a) {
      this.a.N() || this.f.dispatchEvent(a)
    };
    k.Vc = function(a, b) {
      this.a.N() && ("video" == a ? this.g.dispatchEvent(b) : "player" == a && this.f.dispatchEvent(b))
    };

    function A(a, b, c) {
      p.call(this);
      this.b = a;
      this.a = b;
      this.j = {
        video: a,
        player: b
      };
      this.l = c || function() {};
      this.i = !1;
      this.c = !0;
      this.f = this.g = null;
      Fa(this)
    }
    ba(A);
    m("shaka.cast.CastReceiver", A);
    A.prototype.dc = function() {
      return this.i
    };
    A.prototype.isConnected = A.prototype.dc;
    A.prototype.ec = function() {
      return this.c
    };
    A.prototype.isIdle = A.prototype.ec;
    A.prototype.o = function() {
      var a = this.a ? this.a.o() : Promise.resolve();
      null != this.f && window.clearTimeout(this.f);
      this.l = this.j = this.a = this.b = null;
      this.i = !1;
      this.c = !0;
      this.f = this.g = null;
      return a.then(function() {
        cast.receiver.CastReceiverManager.getInstance().stop()
      })
    };
    A.prototype.destroy = A.prototype.o;

    function Fa(a) {
      var b = cast.receiver.CastReceiverManager.getInstance();
      b.onSenderConnected = a.Ab.bind(a);
      b.onSenderDisconnected = a.Ab.bind(a);
      b.onSystemVolumeChanged = a.Xb.bind(a);
      a.g = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
      a.g.onMessage = a.lc.bind(a);
      b.start();
      la.forEach(function(a) {
        this.b.addEventListener(a, this.Db.bind(this, "video"))
      }.bind(a));
      pa.forEach(function(a) {
        this.a.addEventListener(a, this.Db.bind(this, "player"))
      }.bind(a));
      cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ?
        a.a.fb(3840, 2160) : a.a.fb(1920, 1080);
      a.a.addEventListener("loading", function() {
        this.c = !1;
        Ga(this)
      }.bind(a));
      a.b.addEventListener("playing", function() {
        this.c = !1;
        Ga(this)
      }.bind(a));
      a.a.addEventListener("unloading", function() {
        this.c = !0;
        Ga(this)
      }.bind(a));
      a.b.addEventListener("ended", function() {
        window.setTimeout(function() {
          this.b && this.b.ended && (this.c = !0, Ga(this))
        }.bind(this), 5E3)
      }.bind(a))
    }
    k = A.prototype;
    k.Ab = function() {
      this.i = !!cast.receiver.CastReceiverManager.getInstance().getSenders().length;
      Ga(this)
    };

    function Ga(a) {
      Promise.resolve().then(function() {
        this.dispatchEvent(new t("caststatuschanged"))
      }.bind(a))
    }

    function Ha(a, b, c) {
      for (var d in b.player) a.a[d](b.player[d]);
      a.l(c);
      c = Promise.resolve();
      var e = a.b.autoplay;
      b.manifest && (a.b.autoplay = !1, c = a.a.load(b.manifest, b.startTime), c["catch"](function(a) {
        this.a.dispatchEvent(new t("error", {
          detail: a
        }))
      }.bind(a)));
      c.then(function() {
        for (var a in b.video) {
          var c = b.video[a];
          this.b[a] = c
        }
        for (a in b.playerAfterLoad) c = b.playerAfterLoad[a], this.a[a](c);
        this.b.autoplay = e;
        b.manifest && this.b.play()
      }.bind(a))
    }
    k.Db = function(a, b) {
      this.ab();
      Ia(this, {
        type: "event",
        targetName: a,
        event: b
      })
    };
    k.ab = function() {
      null != this.f && window.clearTimeout(this.f);
      this.f = window.setTimeout(this.ab.bind(this), 500);
      var a = {
        video: {},
        player: {}
      };
      ma.forEach(function(b) {
        a.video[b] = this.b[b]
      }.bind(this));
      qa.forEach(function(b) {
        a.player[b] = this.a[b]()
      }.bind(this));
      var b = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
      b && (a.video.volume = b.level, a.video.muted = b.muted);
      Ia(this, {
        type: "update",
        update: a
      })
    };
    k.Xb = function() {
      var a = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
      a && Ia(this, {
        type: "update",
        update: {
          video: {
            volume: a.level,
            muted: a.muted
          }
        }
      });
      Ia(this, {
        type: "event",
        targetName: "video",
        event: {
          type: "volumechange"
        }
      })
    };
    k.lc = function(a) {
      var b = wa(a.data);
      switch (b.type) {
        case "init":
          Ha(this, b.initState, b.appData);
          this.ab();
          break;
        case "appData":
          this.l(b.appData);
          break;
        case "set":
          var c = b.targetName,
            d = b.property,
            e = b.value;
          if ("video" == c)
            if (b = cast.receiver.CastReceiverManager.getInstance(), "volume" == d) {
              b.setSystemVolumeLevel(e);
              break
            } else if ("muted" == d) {
            b.setSystemVolumeMuted(e);
            break
          }
          this.j[c][d] = e;
          break;
        case "call":
          c = b.targetName;
          d = b.methodName;
          e = b.args;
          c = this.j[c];
          c[d].apply(c, e);
          break;
        case "asyncCall":
          c = b.targetName,
            d = b.methodName, e = b.args, b = b.id, a = a.senderId, c = this.j[c], c[d].apply(c, e).then(this.Ib.bind(this, a, b, null), this.Ib.bind(this, a, b))
      }
    };
    k.Ib = function(a, b, c) {
      Ia(this, {
        type: "asyncComplete",
        id: b,
        error: c
      }, a)
    };

    function Ia(a, b, c) {
      a.i && (b = va(b), c ? a.g.getCastChannel(c).send(b) : a.g.broadcast(b))
    };

    function Ja(a, b) {
      return a.reduce(function(a, b, e) {
        return b["catch"](a.bind(null, e))
      }.bind(null, b), Promise.reject())
    }

    function B(a, b) {
      return a.concat(b)
    }

    function C() {}

    function Ka(a) {
      return null != a
    }

    function La(a) {
      return function(b) {
        return b != a
      }
    }

    function Ma(a, b, c) {
      return c.indexOf(a) == b
    };

    function Na(a) {
      return !a || !Object.keys(a).length
    }

    function F(a) {
      return Object.keys(a).map(function(b) {
        return a[b]
      })
    }

    function Oa(a, b) {
      return Object.keys(a).reduce(function(c, d) {
        c[d] = b(a[d], d);
        return c
      }, {})
    }

    function Pa(a, b) {
      return Object.keys(a).every(function(c) {
        return b(c, a[c])
      })
    };

    function Qa(a) {
      return window.btoa(String.fromCharCode.apply(null, a)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/, "")
    }

    function Ra(a) {
      a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
      return b
    }

    function Sa(a) {
      for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2) b[c / 2] = window.parseInt(a.substr(c, 2), 16);
      return b
    }

    function Ta(a) {
      for (var b = "", c = 0; c < a.length; ++c) {
        var d = a[c].toString(16);
        1 == d.length && (d = "0" + d);
        b += d
      }
      return b
    }

    function Ua(a, b) {
      if (!a && !b) return !0;
      if (!a || !b || a.length != b.length) return !1;
      for (var c = 0; c < a.length; ++c)
        if (a[c] != b[c]) return !1;
      return !0
    };

    function Va(a, b) {
      var c = G(a, b);
      return 1 != c.length ? null : c[0]
    }

    function G(a, b) {
      return Array.prototype.filter.call(a.childNodes, function(a) {
        return a.tagName == b
      })
    }

    function Wa(a) {
      var b = a.firstChild;
      return b && b.nodeType == Node.TEXT_NODE ? a.textContent.trim() : null
    }

    function H(a, b, c, d) {
      var e = null;
      a = a.getAttribute(b);
      null != a && (e = c(a));
      return null == e ? void 0 !== d ? d : null : e
    }

    function Xa(a) {
      if (!a) return null;
      a = Date.parse(a);
      return isNaN(a) ? null : Math.floor(a / 1E3)
    }

    function I(a) {
      if (!a) return null;
      a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
      if (!a) return null;
      a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
      return isFinite(a) ? a : null
    }

    function Ya(a) {
      var b = /([0-9]+)-([0-9]+)/.exec(a);
      if (!b) return null;
      a = Number(b[1]);
      if (!isFinite(a)) return null;
      b = Number(b[2]);
      return isFinite(b) ? {
        start: a,
        end: b
      } : null
    }

    function Za(a) {
      a = Number(a);
      return a % 1 ? null : a
    }

    function $a(a) {
      a = Number(a);
      return !(a % 1) && 0 < a ? a : null
    }

    function bb(a) {
      a = Number(a);
      return !(a % 1) && 0 <= a ? a : null
    }

    function cb(a) {
      var b;
      a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1] / b[2]) : Number(a);
      return isNaN(a) ? null : a
    };
    var db = {
      "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
      "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
      "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
      "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
    };

    function eb(a, b) {
      var c = fb(a),
        d = null,
        e = c.filter(function(a) {
          return "urn:mpeg:dash:mp4protection:2011" == a.Hb ? (d = a.init || d, !1) : !0
        }),
        f = c.map(function(a) {
          return a.keyId
        }).filter(Ka),
        g = null;
      if (0 < f.length && (g = f[0], f.some(La(g)))) throw new v(4, 4010);
      f = [];
      0 < e.length ? (f = gb(d, b, e), f.length || (f = [hb("", d)])) : 0 < c.length && (f = F(db).map(function(a) {
        return hb(a, d)
      }));
      return {
        nb: g,
        nd: d,
        drmInfos: f,
        pb: !0
      }
    }

    function ib(a, b, c) {
      var d = eb(a, b);
      if (c.pb) {
        a = 1 == c.drmInfos.length && !c.drmInfos[0].keySystem;
        b = !d.drmInfos.length;
        if (!c.drmInfos.length || a && !b) c.drmInfos = d.drmInfos;
        c.pb = !1
      } else if (0 < d.drmInfos.length && (c.drmInfos = c.drmInfos.filter(function(a) {
          return d.drmInfos.some(function(b) {
            return b.keySystem == a.keySystem
          })
        }), !c.drmInfos.length)) throw new v(4, 4008);
      return d.nb || c.nb
    }

    function hb(a, b) {
      return {
        keySystem: a,
        licenseServerUri: "",
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: b || [],
        keyIds: []
      }
    }

    function gb(a, b, c) {
      return c.map(function(c) {
        var d = db[c.Hb];
        return d ? [hb(d, c.init || a)] : b(c.node) || []
      }).reduce(B, [])
    }

    function fb(a) {
      return a.map(function(a) {
        var b = a.getAttribute("schemeIdUri"),
          d = a.getAttribute("cenc:default_KID"),
          e = G(a, "cenc:pssh").map(Wa);
        if (!b) return null;
        b = b.toLowerCase();
        if (d && (d = d.replace(/-/g, "").toLowerCase(), 0 <= d.indexOf(" "))) throw new v(4, 4009);
        var f = [];
        try {
          f = e.map(function(a) {
            return {
              initDataType: "cenc",
              initData: Ra(a)
            }
          })
        } catch (g) {
          throw new v(4, 4007);
        }
        return {
          node: a,
          Hb: b,
          keyId: d,
          init: 0 < f.length ? f : null
        }
      }).filter(Ka)
    };
    var jb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function kb(a) {
      var b;
      a instanceof kb ? (lb(this, a.S), this.la = a.la, this.U = a.U, mb(this, a.ya), this.O = a.O, nb(this, ob(a.a)), this.ca = a.ca) : a && (b = String(a).match(jb)) ? (lb(this, b[1] || "", !0), this.la = pb(b[2] || ""), this.U = pb(b[3] || "", !0), mb(this, b[4]), this.O = pb(b[5] || "", !0), nb(this, b[6] || "", !0), this.ca = pb(b[7] || "")) : this.a = new qb(null)
    }
    k = kb.prototype;
    k.S = "";
    k.la = "";
    k.U = "";
    k.ya = null;
    k.O = "";
    k.ca = "";
    k.toString = function() {
      var a = [],
        b = this.S;
      b && a.push(rb(b, sb, !0), ":");
      if (b = this.U) {
        a.push("//");
        var c = this.la;
        c && a.push(rb(c, sb, !0), "@");
        a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.ya;
        null != b && a.push(":", String(b))
      }
      if (b = this.O) this.U && "/" != b.charAt(0) && a.push("/"), a.push(rb(b, "/" == b.charAt(0) ? tb : ub, !0));
      (b = this.a.toString()) && a.push("?", b);
      (b = this.ca) && a.push("#", rb(b, vb));
      return a.join("")
    };
    k.resolve = function(a) {
      var b = new kb(this);
      "data" === b.S && (b = new kb);
      var c = !!a.S;
      c ? lb(b, a.S) : c = !!a.la;
      c ? b.la = a.la : c = !!a.U;
      c ? b.U = a.U : c = null != a.ya;
      var d = a.O;
      if (c) mb(b, a.ya);
      else if (c = !!a.O) {
        if ("/" != d.charAt(0))
          if (this.U && !this.O) d = "/" + d;
          else {
            var e = b.O.lastIndexOf("/"); - 1 != e && (d = b.O.substr(0, e + 1) + d)
          }
        if (".." == d || "." == d) d = "";
        else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
          for (var e = !d.lastIndexOf("/", 0), d = d.split("/"), f = [], g = 0; g < d.length;) {
            var h = d[g++];
            "." == h ? e && g == d.length && f.push("") : ".." == h ? ((1 < f.length ||
              1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
          }
          d = f.join("/")
        }
      }
      c ? b.O = d : c = "" !== a.a.toString();
      c ? nb(b, ob(a.a)) : c = !!a.ca;
      c && (b.ca = a.ca);
      return b
    };

    function lb(a, b, c) {
      a.S = c ? pb(b, !0) : b;
      a.S && (a.S = a.S.replace(/:$/, ""))
    }

    function mb(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.ya = b
      } else a.ya = null
    }

    function nb(a, b, c) {
      b instanceof qb ? a.a = b : (c || (b = rb(b, wb)), a.a = new qb(b))
    }

    function pb(a, b) {
      return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
    }

    function rb(a, b, c) {
      return "string" == typeof a ? (a = encodeURI(a).replace(b, xb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function xb(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var sb = /[#\/\?@]/g,
      ub = /[\#\?:]/g,
      tb = /[\#\?]/g,
      wb = /[\#\?@]/g,
      vb = /#/g;

    function qb(a) {
      this.b = a || null
    }
    qb.prototype.a = null;
    qb.prototype.c = null;
    qb.prototype.toString = function() {
      if (this.b) return this.b;
      if (!this.a) return "";
      var a = [],
        b;
      for (b in this.a)
        for (var c = encodeURIComponent(b), d = this.a[b], e = 0; e < d.length; e++) {
          var f = c;
          "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
          a.push(f)
        }
      return this.b = a.join("&")
    };

    function ob(a) {
      var b = new qb;
      b.b = a.b;
      if (a.a) {
        var c = {},
          d;
        for (d in a.a) c[d] = a.a[d].concat();
        b.a = c;
        b.c = a.c
      }
      return b
    };

    function yb(a, b, c) {
      this.a = a;
      this.L = b;
      this.D = c
    }
    m("shaka.media.InitSegmentReference", yb);

    function J(a, b, c, d, e, f) {
      this.position = a;
      this.startTime = b;
      this.endTime = c;
      this.a = d;
      this.L = e;
      this.D = f
    }
    m("shaka.media.SegmentReference", J);
    var zb = 1 / 15;

    function Ab(a, b, c, d, e) {
      null !== e && (e = Math.round(e));
      var f = {
        RepresentationID: b,
        Number: c,
        Bandwidth: d,
        Time: e
      };
      return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function(a, b, c) {
        if ("$$" == a) return "$";
        var d = f[b];
        if (null == d) return a;
        "RepresentationID" == b && c && (c = void 0);
        a = d.toString();
        c = window.parseInt(c, 10) || 1;
        return Array(Math.max(0, c - a.length) + 1).join("0") + a
      })
    }

    function Bb(a, b, c) {
      if (c.length) {
        var d = c[0];
        d.startTime <= zb && (c[0] = new J(d.position, 0, d.endTime, d.a, d.L, d.D));
        a || (a = c[c.length - 1], a.startTime > b || (c[c.length - 1] = new J(a.position, a.startTime, b, a.a, a.L, a.D)))
      }
    }

    function K(a, b) {
      if (!b.length) return a;
      var c = b.map(function(a) {
        return new kb(a)
      });
      return a.map(function(a) {
        return new kb(a)
      }).map(function(a) {
        return c.map(a.resolve.bind(a))
      }).reduce(B, []).map(function(a) {
        return a.toString()
      })
    }

    function Cb(a, b) {
      var c = L(a, b, "timescale"),
        d = 1;
      c && (d = $a(c) || 1);
      c = L(a, b, "duration");
      (c = $a(c || "")) && (c /= d);
      var e = L(a, b, "startNumber"),
        f = L(a, b, "presentationTimeOffset"),
        g = bb(e || "");
      if (null == e || null == g) g = 1;
      var h = Db(a, b, "SegmentTimeline"),
        e = null;
      if (h) {
        for (var e = d, l = Number(f), n = a.H.duration || Infinity, h = G(h, "S"), r = [], u = 0, X = 0; X < h.length; ++X) {
          var D = h[X],
            E = H(D, "t", bb),
            ab = H(D, "d", bb),
            D = H(D, "r", Za);
          null != E && (E -= l);
          if (!ab) break;
          E = null != E ? E : u;
          D = D || 0;
          if (0 > D)
            if (X + 1 < h.length) {
              D = H(h[X + 1], "t", bb);
              if (null == D) break;
              else if (E >=
                D) break;
              D = Math.ceil((D - E) / ab) - 1
            } else {
              if (Infinity == n) break;
              else if (E / e >= n) break;
              D = Math.ceil((n * e - E) / ab) - 1
            }
          0 < r.length && E != u && (r[r.length - 1].end = E / e);
          for (var Xc = 0; Xc <= D; ++Xc) u = E + ab, r.push({
            start: E / e,
            end: u / e,
            fd: E
          }), E = u
        }
        e = r
      }
      return {
        Oa: d,
        F: c,
        ia: g,
        presentationTimeOffset: Number(f) / d || 0,
        kb: Number(f),
        A: e
      }
    }

    function L(a, b, c) {
      return [b(a.u), b(a.P), b(a.K)].filter(Ka).map(function(a) {
        return a.getAttribute(c)
      }).reduce(function(a, b) {
        return a || b
      })
    }

    function Db(a, b, c) {
      return [b(a.u), b(a.P), b(a.K)].filter(Ka).map(function(a) {
        return Va(a, c)
      }).reduce(function(a, b) {
        return a || b
      })
    };

    function Eb(a) {
      if (!a) return "";
      a = new Uint8Array(a);
      239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
      a = escape(Fb(a));
      try {
        return decodeURIComponent(a)
      } catch (b) {
        throw new v(2, 2004);
      }
    }

    function Gb(a, b) {
      if (!a) return "";
      if (a.byteLength % 2) throw new v(2, 2004);
      var c;
      if (a instanceof ArrayBuffer) c = a;
      else {
        var d = new Uint8Array(a.byteLength);
        d.set(new Uint8Array(a));
        c = d.buffer
      }
      var d = a.byteLength / 2,
        e = new Uint16Array(d);
      c = new DataView(c);
      for (var f = 0; f < d; f++) e[f] = c.getUint16(2 * f, b);
      return Fb(e)
    }

    function Hb(a) {
      var b = new Uint8Array(a);
      if (239 == b[0] && 187 == b[1] && 191 == b[2]) return Eb(b);
      if (254 == b[0] && 255 == b[1]) return Gb(b.subarray(2), !1);
      if (255 == b[0] && 254 == b[1]) return Gb(b.subarray(2), !0);
      var c = function(a, b) {
        return a.byteLength <= b || 32 <= a[b] && 126 >= a[b]
      }.bind(null, b);
      if (b[0] || b[2]) {
        if (!b[1] && !b[3]) return Gb(a, !0);
        if (c(0) && c(1) && c(2) && c(3)) return Eb(a)
      } else return Gb(a, !1);
      throw new v(2, 2003);
    }

    function Ib(a) {
      a = unescape(encodeURIComponent(a));
      for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
      return b.buffer
    }

    function Fb(a) {
      for (var b = "", c = 0; c < a.length; c += 16E3) b += String.fromCharCode.apply(null, a.subarray(c, c + 16E3));
      return b
    };

    function Jb(a) {
      this.b = a;
      this.c = 0 == Kb;
      this.a = 0
    }
    var Kb = 1;

    function Lb(a) {
      return a.a < a.b.byteLength
    }

    function Mb(a) {
      try {
        var b = a.b.getUint8(a.a)
      } catch (c) {
        Nb()
      }
      a.a += 1;
      return b
    }

    function Ob(a) {
      try {
        var b = a.b.getUint16(a.a, a.c)
      } catch (c) {
        Nb()
      }
      a.a += 2;
      return b
    }

    function M(a) {
      try {
        var b = a.b.getUint32(a.a, a.c)
      } catch (c) {
        Nb()
      }
      a.a += 4;
      return b
    }

    function Pb(a) {
      var b, c;
      try {
        a.c ? (b = a.b.getUint32(a.a, !0), c = a.b.getUint32(a.a + 4, !0)) : (c = a.b.getUint32(a.a, !1), b = a.b.getUint32(a.a + 4, !1))
      } catch (d) {
        Nb()
      }
      if (2097151 < c) throw new v(3, 3001);
      a.a += 8;
      return c * Math.pow(2, 32) + b
    }

    function Qb(a, b) {
      a.a + b > a.b.byteLength && Nb();
      var c = a.b.buffer.slice(a.a, a.a + b);
      a.a += b;
      return new Uint8Array(c)
    }

    function N(a, b) {
      a.a + b > a.b.byteLength && Nb();
      a.a += b
    }

    function Rb(a) {
      var b = a.a;
      try {
        for (; Lb(a) && a.b.getUint8(a.a);) a.a += 1
      } catch (c) {
        Nb()
      }
      b = a.b.buffer.slice(b, a.a);
      a.a += 1;
      return Eb(b)
    }

    function Nb() {
      throw new v(3, 3E3);
    };

    function Sb(a, b) {
      for (; Lb(b);) {
        var c = b.a,
          d = M(b),
          e = M(b);
        1 == d ? d = Pb(b) : d || (d = b.b.byteLength - c);
        if (e == a) return d;
        N(b, d - (b.a - c))
      }
      return -1
    }

    function Tb(a, b) {
      for (var c = new Jb(new DataView(a)), d = [
          [1836019574, 0],
          [1953653099, 0],
          [1835297121, 0],
          [1835626086, 0],
          [1937007212, 0],
          [1937011556, 8],
          [b, 0]
        ], e = -1, f = 0; f < d.length; f++) {
        var g = d[f][1],
          e = Sb(d[f][0], c);
        if (-1 == e) return -1;
        N(c, g)
      }
      return e
    };

    function Ub(a, b, c, d) {
      var e = [];
      a = new Jb(new DataView(a));
      var f = Sb(1936286840, a);
      if (-1 == f) throw new v(3, 3004);
      var g = Mb(a);
      N(a, 3);
      N(a, 4);
      var h = M(a);
      if (!h) throw new v(3, 3005);
      var l, n;
      g ? (l = Pb(a), n = Pb(a)) : (l = M(a), n = M(a));
      N(a, 2);
      g = Ob(a);
      d = l - d;
      b = b + f + n;
      for (f = 0; f < g; f++) {
        l = M(a);
        n = (l & 2147483648) >>> 31;
        l &= 2147483647;
        var r = M(a);
        N(a, 4);
        if (1 == n) throw new v(3, 3006);
        e.push(new J(e.length, d / h, (d + r) / h, function() {
          return c
        }, b, b + l - 1));
        d += r;
        b += l
      }
      return e
    };

    function O(a) {
      this.a = a
    }
    m("shaka.media.SegmentIndex", O);
    O.prototype.o = function() {
      this.a = null;
      return Promise.resolve()
    };
    O.prototype.destroy = O.prototype.o;
    O.prototype.find = function(a) {
      for (var b = this.a.length - 1; 0 <= b; --b) {
        var c = this.a[b];
        if (a >= c.startTime && a < c.endTime) return c.position
      }
      return null
    };
    O.prototype.find = O.prototype.find;
    O.prototype.get = function(a) {
      if (!this.a.length) return null;
      a -= this.a[0].position;
      return 0 > a || a >= this.a.length ? null : this.a[a]
    };
    O.prototype.get = O.prototype.get;
    O.prototype.Ya = function(a) {
      for (var b = [], c = 0, d = 0; c < this.a.length && d < a.length;) {
        var e = this.a[c],
          f = a[d];
        e.startTime < f.startTime ? (b.push(e), c++) : (e.startTime > f.startTime || (.1 < Math.abs(e.endTime - f.endTime) ? b.push(f) : b.push(e), c++), d++)
      }
      for (; c < this.a.length;) b.push(this.a[c++]);
      if (b.length)
        for (c = b[b.length - 1].position + 1; d < a.length;) f = a[d++], f = new J(c++, f.startTime, f.endTime, f.a, f.L, f.D), b.push(f);
      else b = a;
      this.a = b
    };
    O.prototype.merge = O.prototype.Ya;
    O.prototype.Sa = function(a) {
      for (var b = 0; b < this.a.length && !(this.a[b].endTime > a); ++b);
      this.a.splice(0, b)
    };
    O.prototype.evict = O.prototype.Sa;

    function Vb(a) {
      this.b = a;
      this.a = new Jb(a);
      Wb || (Wb = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
    }
    var Wb;

    function Xb(a) {
      var b;
      b = Yb(a);
      if (7 < b.length) throw new v(3, 3002);
      for (var c = 0, d = 0; d < b.length; d++) c = 256 * c + b[d];
      b = c;
      c = Yb(a);
      a: {
        for (d = 0; d < Wb.length; d++)
          if (Ua(c, Wb[d])) {
            d = !0;
            break a
          }
        d = !1
      }
      if (d) c = a.b.byteLength - a.a.a;
      else {
        if (8 == c.length && c[1] & 224) throw new v(3, 3001);
        for (var d = c[0] & (1 << 8 - c.length) - 1, e = 1; e < c.length; e++) d = 256 * d + c[e];
        c = d
      }
      c = a.a.a + c <= a.b.byteLength ? c : a.b.byteLength - a.a.a;
      d = new DataView(a.b.buffer, a.b.byteOffset + a.a.a, c);
      N(a.a, c);
      return new Zb(b, d)
    }

    function Yb(a) {
      var b = Mb(a.a),
        c;
      for (c = 1; 8 >= c && !(b & 1 << 8 - c); c++);
      if (8 < c) throw new v(3, 3002);
      var d = new Uint8Array(c);
      d[0] = b;
      for (b = 1; b < c; b++) d[b] = Mb(a.a);
      return d
    }

    function Zb(a, b) {
      this.id = a;
      this.a = b
    }

    function $b(a) {
      if (8 < a.a.byteLength) throw new v(3, 3002);
      if (8 == a.a.byteLength && a.a.getUint8(0) & 224) throw new v(3, 3001);
      for (var b = 0, c = 0; c < a.a.byteLength; c++) var d = a.a.getUint8(c),
        b = 256 * b + d;
      return b
    };

    function ac(a, b, c, d, e, f) {
      function g() {
        return e
      }
      var h = [];
      a = new Vb(a.a);
      for (var l = -1, n = -1; Lb(a.a);) {
        var r = Xb(a);
        if (187 == r.id) {
          var u = bc(r);
          u && (r = c * (u.gd - f), u = b + u.Ec, 0 <= l && h.push(new J(h.length, l, r, g, n, u - 1)), l = r, n = u)
        }
      }
      0 <= l && h.push(new J(h.length, l, d, g, n, null));
      return h
    }

    function bc(a) {
      var b = new Vb(a.a);
      a = Xb(b);
      if (179 != a.id) throw new v(3, 3013);
      a = $b(a);
      b = Xb(b);
      if (183 != b.id) throw new v(3, 3012);
      for (var b = new Vb(b.a), c = 0; Lb(b.a);) {
        var d = Xb(b);
        if (241 == d.id) {
          c = $b(d);
          break
        }
      }
      return {
        gd: a,
        Ec: c
      }
    };

    function cc(a, b) {
      var c = Db(a, b, "Initialization");
      if (!c) return null;
      var d = a.u.M,
        e = c.getAttribute("sourceURL");
      e && (d = K(a.u.M, [e]));
      var e = 0,
        f = null;
      if (c = H(c, "range", Ya)) e = c.start, f = c.end;
      return new yb(function() {
        return d
      }, e, f)
    }

    function dc(a, b) {
      var c = L(a, ec, "presentationTimeOffset"),
        d = cc(a, ec),
        e;
      e = Number(c);
      var f = a.u.contentType,
        g = a.u.mimeType.split("/")[1];
      if ("text" != f && "mp4" != g && "webm" != g) throw new v(4, 4006);
      if ("webm" == g && !d) throw new v(4, 4005);
      var f = Db(a, ec, "RepresentationIndex"),
        h = L(a, ec, "indexRange"),
        l = a.u.M,
        h = Ya(h || "");
      if (f) {
        var n = f.getAttribute("sourceURL");
        n && (l = K(a.u.M, [n]));
        h = H(f, "range", Ya, h)
      }
      if (!h) throw new v(4, 4002);
      e = fc(a, b, d, l, h.start, h.end, g, e);
      return {
        createSegmentIndex: e.createSegmentIndex,
        findSegmentPosition: e.findSegmentPosition,
        getSegmentReference: e.getSegmentReference,
        initSegmentReference: d,
        presentationTimeOffset: Number(c) || 0
      }
    }

    function fc(a, b, c, d, e, f, g, h) {
      var l = a.presentationTimeline,
        n = a.H.start,
        r = a.H.duration,
        u = b,
        X = null;
      return {
        createSegmentIndex: function() {
          var b = [u(d, e, f), "webm" == g ? u(c.a(), c.L, c.D) : null];
          u = null;
          return Promise.all(b).then(function(b) {
            var c, f, u = b[0];
            b = b[1] || null;
            if ("mp4" == g) u = Ub(u, e, d, h);
            else {
              b = new Vb(new DataView(b));
              if (440786851 != Xb(b).id) throw new v(3, 3008);
              f = Xb(b);
              if (408125543 != f.id) throw new v(3, 3009);
              b = f.a.byteOffset;
              f = new Vb(f.a);
              for (c = null; Lb(f.a);) {
                var D = Xb(f);
                if (357149030 == D.id) {
                  c = D;
                  break
                }
              }
              if (!c) throw new v(3,
                3010);
              c = new Vb(c.a);
              D = 1E6;
              for (f = null; Lb(c.a);) {
                var E = Xb(c);
                if (2807729 == E.id) D = $b(E);
                else if (17545 == E.id)
                  if (f = E, 4 == f.a.byteLength) f = f.a.getFloat32(0);
                  else if (8 == f.a.byteLength) f = f.a.getFloat64(0);
                else throw new v(3, 3003);
              }
              if (null == f) throw new v(3, 3011);
              c = D /= 1E9;
              f *= D;
              u = Xb(new Vb(new DataView(u)));
              if (475249515 != u.id) throw new v(3, 3007);
              u = ac(u, b, c, f, d, h)
            }
            Bb(a.Ra, r, u);
            l.Ha(n, u);
            X = new O(u)
          })
        },
        findSegmentPosition: function(a) {
          return X.find(a)
        },
        getSegmentReference: function(a) {
          return X.get(a)
        }
      }
    }

    function ec(a) {
      return a.Ia
    };

    function gc(a, b) {
      var c = cc(a, hc),
        d;
      d = ic(a);
      var e = Cb(a, hc),
        f = e.ia;
      f || (f = 1);
      var g = 0;
      e.F ? g = e.F * (f - 1) - e.presentationTimeOffset : e.A && 0 < e.A.length && (g = e.A[0].start);
      d = {
        F: e.F,
        startTime: g,
        ia: f,
        presentationTimeOffset: e.presentationTimeOffset,
        A: e.A,
        wa: d
      };
      if (!d.F && !d.A && 1 < d.wa.length) throw new v(4, 4002);
      if (!d.F && !a.H.duration && !d.A && 1 == d.wa.length) throw new v(4, 4002);
      if (d.A && !d.A.length) throw new v(4, 4002);
      f = e = null;
      a.K.id && a.u.id && (f = a.K.id + "," + a.u.id, e = b[f]);
      g = jc(a.H.duration, d.ia, a.u.M, d);
      Bb(a.Ra, a.H.duration,
        g);
      e ? (e.Ya(g), e.Sa(a.presentationTimeline.ua() - a.H.start)) : (a.presentationTimeline.Ha(a.H.start, g), e = new O(g), f && (b[f] = e));
      return {
        createSegmentIndex: Promise.resolve.bind(Promise),
        findSegmentPosition: e.find.bind(e),
        getSegmentReference: e.get.bind(e),
        initSegmentReference: c,
        presentationTimeOffset: d.presentationTimeOffset
      }
    }

    function hc(a) {
      return a.Z
    }

    function jc(a, b, c, d) {
      var e = d.wa.length;
      d.A && d.A.length != d.wa.length && (e = Math.min(d.A.length, d.wa.length));
      for (var f = [], g = d.startTime, h = 0; h < e; h++) {
        var l = d.wa[h],
          n = K(c, [l.hc]),
          r;
        r = null != d.F ? g + d.F : d.A ? d.A[h].end : g + a;
        f.push(new J(h + b, g, r, function(a) {
          return a
        }.bind(null, n), l.start, l.end));
        g = r
      }
      return f
    }

    function ic(a) {
      return [a.u.Z, a.P.Z, a.K.Z].filter(Ka).map(function(a) {
        return G(a, "SegmentURL")
      }).reduce(function(a, c) {
        return 0 < a.length ? a : c
      }).map(function(b) {
        b.getAttribute("indexRange") && !a.tb && (a.tb = !0);
        var c = b.getAttribute("media");
        b = H(b, "mediaRange", Ya, {
          start: 0,
          end: null
        });
        return {
          hc: c,
          start: b.start,
          end: b.end
        }
      })
    };

    function kc(a, b, c, d) {
      var e = lc(a),
        f;
      f = Cb(a, mc);
      var g = L(a, mc, "media"),
        h = L(a, mc, "index");
      f = {
        F: f.F,
        Oa: f.Oa,
        ia: f.ia,
        presentationTimeOffset: f.presentationTimeOffset,
        kb: f.kb,
        A: f.A,
        Xa: g,
        Fa: h
      };
      g = 0 + (f.Fa ? 1 : 0);
      g += f.A ? 1 : 0;
      g += f.F ? 1 : 0;
      if (!g) throw new v(4, 4002);
      1 != g && (f.Fa && (f.A = null), f.F = null);
      if (!f.Fa && !f.Xa) throw new v(4, 4002);
      if (f.Fa) {
        c = a.u.mimeType.split("/")[1];
        if ("mp4" != c && "webm" != c) throw new v(4, 4006);
        if ("webm" == c && !e) throw new v(4, 4005);
        d = Ab(f.Fa, a.u.id, null, a.bandwidth || null, null);
        d = K(a.u.M, [d]);
        a = fc(a,
          b, e, d, 0, null, c, f.presentationTimeOffset)
      } else f.F ? (d || a.presentationTimeline.Za(f.F), a = nc(a, f)) : (d = b = null, a.K.id && a.u.id && (d = a.K.id + "," + a.u.id, b = c[d]), g = oc(a, f), Bb(a.Ra, a.H.duration, g), b ? (b.Ya(g), b.Sa(a.presentationTimeline.ua() - a.H.start)) : (a.presentationTimeline.Ha(a.H.start, g), b = new O(g), d && (c[d] = b)), a = {
        createSegmentIndex: Promise.resolve.bind(Promise),
        findSegmentPosition: b.find.bind(b),
        getSegmentReference: b.get.bind(b)
      });
      return {
        createSegmentIndex: a.createSegmentIndex,
        findSegmentPosition: a.findSegmentPosition,
        getSegmentReference: a.getSegmentReference,
        initSegmentReference: e,
        presentationTimeOffset: f.presentationTimeOffset
      }
    }

    function mc(a) {
      return a.Ja
    }

    function nc(a, b) {
      var c = a.H.duration,
        d = b.F,
        e = b.ia,
        f = b.Oa,
        g = b.Xa,
        h = a.bandwidth || null,
        l = a.u.id,
        n = a.u.M;
      return {
        createSegmentIndex: Promise.resolve.bind(Promise),
        findSegmentPosition: function(a) {
          return 0 > a || c && a >= c ? null : Math.floor(a / d)
        },
        getSegmentReference: function(a) {
          var b = a * d;
          return new J(a, b, b + d, function() {
            var c = Ab(g, l, a + e, h, b * f);
            return K(n, [c])
          }, 0, null)
        }
      }
    }

    function oc(a, b) {
      for (var c = [], d = 0; d < b.A.length; d++) {
        var e = d + b.ia;
        c.push(new J(e, b.A[d].start, b.A[d].end, function(a, b, c, d, e, r) {
          a = Ab(a, b, e, c, r);
          return K(d, [a]).map(function(a) {
            return a.toString()
          })
        }.bind(null, b.Xa, a.u.id, a.bandwidth || null, a.u.M, e, b.A[d].fd + b.kb), 0, null))
      }
      return c
    }

    function lc(a) {
      var b = L(a, mc, "initialization");
      if (!b) return null;
      var c = a.u.id,
        d = a.bandwidth || null,
        e = a.u.M;
      return new yb(function() {
        var a = Ab(b, c, null, d, null);
        return K(e, [a])
      }, 0, null)
    };

    function P(a) {
      this.f = !1;
      this.a = [];
      this.b = [];
      this.c = [];
      this.g = a || null
    }
    m("shaka.net.NetworkingEngine", P);
    P.RequestType = {
      MANIFEST: 0,
      SEGMENT: 1,
      LICENSE: 2
    };
    var pc = {};
    P.registerScheme = function(a, b) {
      pc[a] = b
    };
    P.unregisterScheme = function(a) {
      delete pc[a]
    };
    P.prototype.Dc = function(a) {
      this.b.push(a)
    };
    P.prototype.registerRequestFilter = P.prototype.Dc;
    P.prototype.ed = function(a) {
      var b = this.b;
      a = b.indexOf(a);
      0 <= a && b.splice(a, 1)
    };
    P.prototype.unregisterRequestFilter = P.prototype.ed;
    P.prototype.Tb = function() {
      this.b = []
    };
    P.prototype.clearAllRequestFilters = P.prototype.Tb;
    P.prototype.Eb = function(a) {
      this.c.push(a)
    };
    P.prototype.registerResponseFilter = P.prototype.Eb;
    P.prototype.Nb = function(a) {
      var b = this.c;
      a = b.indexOf(a);
      0 <= a && b.splice(a, 1)
    };
    P.prototype.unregisterResponseFilter = P.prototype.Nb;
    P.prototype.Ub = function() {
      this.c = []
    };
    P.prototype.clearAllResponseFilters = P.prototype.Ub;

    function qc() {
      return {
        maxAttempts: 2,
        baseDelay: 1E3,
        backoffFactor: 2,
        fuzzFactor: .5,
        timeout: 0
      }
    }

    function rc(a, b) {
      return {
        uris: a,
        method: "GET",
        body: null,
        headers: {},
        allowCrossSiteCredentials: !1,
        retryParameters: b
      }
    }
    P.prototype.o = function() {
      this.f = !0;
      this.b = [];
      this.c = [];
      for (var a = [], b = 0; b < this.a.length; ++b) a.push(this.a[b]["catch"](C));
      return Promise.all(a)
    };
    P.prototype.destroy = P.prototype.o;
    P.prototype.request = function(a, b) {
      if (this.f) return Promise.reject();
      for (var c = Date.now(), d = this.b, e = 0; e < d.length; e++) try {
        d[e](a, b)
      } catch (l) {
        return Promise.reject(l)
      }
      for (var e = b.retryParameters || {}, d = e.maxAttempts || 1, f = e.backoffFactor || 2, g = null == e.baseDelay ? 1E3 : e.baseDelay, h = this.h(a, b, 0), e = 1; e < d; e++) h = h["catch"](this.i.bind(this, a, b, g, e % b.uris.length)), g *= f;
      this.a.push(h);
      return h.then(function(b) {
        0 <= this.a.indexOf(h) && this.a.splice(this.a.indexOf(h), 1);
        var d = Date.now();
        this.g && 1 == a && this.g(c, d, b.data.byteLength);
        return b
      }.bind(this))["catch"](function(a) {
        0 <= this.a.indexOf(h) && this.a.splice(this.a.indexOf(h), 1);
        return Promise.reject(a)
      }.bind(this))
    };
    P.prototype.request = P.prototype.request;
    P.prototype.h = function(a, b, c) {
      if (this.f) return Promise.reject();
      var d = new kb(b.uris[c]),
        e = d.S;
      e || (e = location.protocol, e = e.slice(0, -1), lb(d, e), b.uris[c] = d.toString());
      return (e = pc[e]) ? e(b.uris[c], b).then(function(b) {
        for (var c = this.c, d = 0; d < c.length; d++) c[d](a, b);
        return b
      }.bind(this)) : Promise.reject(new v(1, 1E3, d))
    };
    P.prototype.i = function(a, b, c, d) {
      var e = new w,
        f = b.retryParameters || {};
      window.setTimeout(e.resolve, c * (1 + (2 * Math.random() - 1) * (null == f.fuzzFactor ? .5 : f.fuzzFactor)));
      return e.then(this.h.bind(this, a, b, d))
    };
    var sc = {},
      tc = {};
    m("shaka.media.ManifestParser.registerParserByExtension", function(a, b) {
      tc[a] = b
    });
    m("shaka.media.ManifestParser.registerParserByMime", function(a, b) {
      sc[a] = b
    });

    function uc() {
      var a = {},
        b;
      for (b in sc) a[b] = !0;
      for (b in tc) a[b] = !0;
      ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function(b) {
        a[b] = !!sc[b]
      });
      ["mpd", "m3u8", "ism"].forEach(function(b) {
        a[b] = !!tc[b]
      });
      return a
    }

    function vc(a, b, c, d) {
      var e = d;
      e || (d = (new kb(a)).O.split("/").pop().split("."), 1 < d.length && (d = d.pop().toLowerCase(), e = tc[d]));
      if (e) return Promise.resolve(e);
      c = rc([a], c);
      c.method = "HEAD";
      return b.request(0, c).then(function(b) {
        (b = b.headers["content-type"]) && (b = b.toLowerCase());
        return (e = sc[b]) ? e : Promise.reject(new v(4, 4E3, a))
      }, function(a) {
        return Promise.reject(a)
      })
    };

    function Q(a, b) {
      this.j = a;
      this.i = b;
      this.c = this.a = Infinity;
      this.b = 1;
      this.g = this.f = 0;
      this.h = !0
    }
    m("shaka.media.PresentationTimeline", Q);
    Q.prototype.da = function() {
      return this.a
    };
    Q.prototype.getDuration = Q.prototype.da;
    Q.prototype.Aa = function(a) {
      this.a = a
    };
    Q.prototype.setDuration = Q.prototype.Aa;
    Q.prototype.Jb = function(a) {
      this.g = a
    };
    Q.prototype.setClockOffset = Q.prototype.Jb;
    Q.prototype.Lb = function(a) {
      this.h = a
    };
    Q.prototype.setStatic = Q.prototype.Lb;
    Q.prototype.ac = function() {
      return this.c
    };
    Q.prototype.getSegmentAvailabilityDuration = Q.prototype.ac;
    Q.prototype.Kb = function(a) {
      this.c = a
    };
    Q.prototype.setSegmentAvailabilityDuration = Q.prototype.Kb;
    Q.prototype.Ha = function(a, b) {
      b.length && (this.b = b.reduce(function(a, b) {
        return Math.max(a, b.endTime - b.startTime)
      }, this.b), a || (this.f = Math.max(this.f, b[0].startTime)))
    };
    Q.prototype.notifySegments = Q.prototype.Ha;
    Q.prototype.Za = function(a) {
      this.b = Math.max(this.b, a)
    };
    Q.prototype.notifyMaxSegmentDuration = Q.prototype.Za;
    Q.prototype.R = function() {
      return Infinity == this.a && !this.h
    };
    Q.prototype.isLive = Q.prototype.R;
    Q.prototype.ea = function() {
      return Infinity != this.a && !this.h
    };
    Q.prototype.isInProgress = Q.prototype.ea;
    Q.prototype.ta = function() {
      return Math.max(Math.min(this.f, this.Y()), this.ua())
    };
    Q.prototype.getEarliestStart = Q.prototype.ta;
    Q.prototype.ua = function() {
      return Infinity == this.c ? 0 : Math.max(0, this.Y() - this.c)
    };
    Q.prototype.getSegmentAvailabilityStart = Q.prototype.ua;
    Q.prototype.Y = function() {
      return this.R() || this.ea() ? Math.min(Math.max(0, (Date.now() + this.g) / 1E3 - this.b - this.j), this.a) : this.a
    };
    Q.prototype.getSegmentAvailabilityEnd = Q.prototype.Y;
    Q.prototype.Ua = function() {
      return Math.max(0, this.Y() - (this.R() || this.ea() ? this.i : 0))
    };
    Q.prototype.getSeekRangeEnd = Q.prototype.Ua;

    function wc(a, b, c) {
      this.h = R[b];
      this.c = a;
      this.g = 0;
      this.f = Infinity;
      this.a = this.b = null;
      this.i = c
    }
    var R = {};
    m("shaka.media.TextEngine.registerParser", function(a, b) {
      R[a] = b
    });
    m("shaka.media.TextEngine.unregisterParser", function(a) {
      delete R[a]
    });

    function xc(a, b, c) {
      return a >= b ? null : new VTTCue(a, b, c)
    }
    m("shaka.media.TextEngine.makeCue", xc);
    wc.prototype.o = function() {
      this.c && yc(this, function() {
        return !0
      });
      this.c = this.h = null;
      return Promise.resolve()
    };

    function zc(a, b, c, d) {
      var e = a.g;
      return Promise.resolve().then(function() {
        if (this.c) {
          var a = this.h(b, e, c, d, this.i);
          if (null != c && null != d) {
            for (var g = 0; g < a.length && !(a[g].startTime >= this.f); ++g) this.c.addCue(a[g]);
            null == this.b && (this.b = c);
            this.a = Math.min(d, this.f)
          }
        }
      }.bind(a))
    }
    wc.prototype.remove = function(a, b) {
      return Promise.resolve().then(function() {
        this.c && (yc(this, function(c) {
          return c.startTime >= b || c.endTime <= a ? !1 : !0
        }), null == this.b || b <= this.b || a >= this.a || (a <= this.b && b >= this.a ? this.b = this.a = null : a <= this.b && b < this.a ? this.b = b : a > this.b && b >= this.a && (this.a = a)))
      }.bind(this))
    };

    function Ac(a, b) {
      return null == a.a || a.a < b || b < a.b ? 0 : a.a - b
    }

    function yc(a, b) {
      for (var c = a.c.cues, d = [], e = 0; e < c.length; ++e) b(c[e]) && d.push(c[e]);
      for (e = 0; e < d.length; ++e) a.c.removeCue(d[e])
    };

    function Bc(a, b, c) {
      return c == b || a >= Cc && c == b.split("-")[0] || a >= Dc && c.split("-")[0] == b.split("-")[0] ? !0 : !1
    }
    var Cc = 1,
      Dc = 2;

    function Ec(a) {
      a = a.toLowerCase().split("-");
      var b = Fc[a[0]];
      b && (a[0] = b);
      return a.join("-")
    }
    var Fc = {
      aar: "aa",
      abk: "ab",
      afr: "af",
      aka: "ak",
      alb: "sq",
      amh: "am",
      ara: "ar",
      arg: "an",
      arm: "hy",
      asm: "as",
      ava: "av",
      ave: "ae",
      aym: "ay",
      aze: "az",
      bak: "ba",
      bam: "bm",
      baq: "eu",
      bel: "be",
      ben: "bn",
      bih: "bh",
      bis: "bi",
      bod: "bo",
      bos: "bs",
      bre: "br",
      bul: "bg",
      bur: "my",
      cat: "ca",
      ces: "cs",
      cha: "ch",
      che: "ce",
      chi: "zh",
      chu: "cu",
      chv: "cv",
      cor: "kw",
      cos: "co",
      cre: "cr",
      cym: "cy",
      cze: "cs",
      dan: "da",
      deu: "de",
      div: "dv",
      dut: "nl",
      dzo: "dz",
      ell: "el",
      eng: "en",
      epo: "eo",
      est: "et",
      eus: "eu",
      ewe: "ee",
      fao: "fo",
      fas: "fa",
      fij: "fj",
      fin: "fi",
      fra: "fr",
      fre: "fr",
      fry: "fy",
      ful: "ff",
      geo: "ka",
      ger: "de",
      gla: "gd",
      gle: "ga",
      glg: "gl",
      glv: "gv",
      gre: "el",
      grn: "gn",
      guj: "gu",
      hat: "ht",
      hau: "ha",
      heb: "he",
      her: "hz",
      hin: "hi",
      hmo: "ho",
      hrv: "hr",
      hun: "hu",
      hye: "hy",
      ibo: "ig",
      ice: "is",
      ido: "io",
      iii: "ii",
      iku: "iu",
      ile: "ie",
      ina: "ia",
      ind: "id",
      ipk: "ik",
      isl: "is",
      ita: "it",
      jav: "jv",
      jpn: "ja",
      kal: "kl",
      kan: "kn",
      kas: "ks",
      kat: "ka",
      kau: "kr",
      kaz: "kk",
      khm: "km",
      kik: "ki",
      kin: "rw",
      kir: "ky",
      kom: "kv",
      kon: "kg",
      kor: "ko",
      kua: "kj",
      kur: "ku",
      lao: "lo",
      lat: "la",
      lav: "lv",
      lim: "li",
      lin: "ln",
      lit: "lt",
      ltz: "lb",
      lub: "lu",
      lug: "lg",
      mac: "mk",
      mah: "mh",
      mal: "ml",
      mao: "mi",
      mar: "mr",
      may: "ms",
      mkd: "mk",
      mlg: "mg",
      mlt: "mt",
      mon: "mn",
      mri: "mi",
      msa: "ms",
      mya: "my",
      nau: "na",
      nav: "nv",
      nbl: "nr",
      nde: "nd",
      ndo: "ng",
      nep: "ne",
      nld: "nl",
      nno: "nn",
      nob: "nb",
      nor: "no",
      nya: "ny",
      oci: "oc",
      oji: "oj",
      ori: "or",
      orm: "om",
      oss: "os",
      pan: "pa",
      per: "fa",
      pli: "pi",
      pol: "pl",
      por: "pt",
      pus: "ps",
      que: "qu",
      roh: "rm",
      ron: "ro",
      rum: "ro",
      run: "rn",
      rus: "ru",
      sag: "sg",
      san: "sa",
      sin: "si",
      slk: "sk",
      slo: "sk",
      slv: "sl",
      sme: "se",
      smo: "sm",
      sna: "sn",
      snd: "sd",
      som: "so",
      sot: "st",
      spa: "es",
      sqi: "sq",
      srd: "sc",
      srp: "sr",
      ssw: "ss",
      sun: "su",
      swa: "sw",
      swe: "sv",
      tah: "ty",
      tam: "ta",
      tat: "tt",
      tel: "te",
      tgk: "tg",
      tgl: "tl",
      tha: "th",
      tib: "bo",
      tir: "ti",
      ton: "to",
      tsn: "tn",
      tso: "ts",
      tuk: "tk",
      tur: "tr",
      twi: "tw",
      uig: "ug",
      ukr: "uk",
      urd: "ur",
      uzb: "uz",
      ven: "ve",
      vie: "vi",
      vol: "vo",
      wel: "cy",
      wln: "wa",
      wol: "wo",
      xho: "xh",
      yid: "yi",
      yor: "yo",
      zha: "za",
      zho: "zh",
      zul: "zu"
    };

    function Gc(a, b, c) {
      for (var d = 0; d < a.length; ++d)
        if (c(a[d], b)) return d;
      return -1
    };

    function Hc(a) {
      this.a = null;
      this.b = function() {
        this.a = null;
        a()
      }.bind(this)
    }
    Hc.prototype.cancel = function() {
      null != this.a && (clearTimeout(this.a), this.a = null)
    };

    function Ic(a) {
      a.cancel();
      a.a = setTimeout(a.b, 100)
    };

    function Jc(a, b, c) {
      this.l = this.g = this.s = null;
      this.B = !1;
      this.b = null;
      this.f = new x;
      this.a = [];
      this.m = [];
      this.j = new w;
      this.G = a;
      this.i = null;
      this.h = function(a) {
        this.j.reject(a);
        b(a)
      }.bind(this);
      this.w = {};
      this.J = c;
      this.v = new Hc(this.Cc.bind(this));
      this.C = this.c = !1;
      this.j["catch"](function() {})
    }
    k = Jc.prototype;
    k.o = function() {
      this.c = !0;
      var a = this.a.map(function(a) {
        return (a.ga.close() || Promise.resolve())["catch"](C)
      });
      this.j.reject();
      this.f && a.push(this.f.o());
      this.l && a.push(this.l.setMediaKeys(null)["catch"](C));
      this.v && this.v.cancel();
      this.f = this.l = this.g = this.s = this.b = this.v = null;
      this.a = [];
      this.m = [];
      this.h = this.i = this.G = null;
      return Promise.all(a)
    };
    k.configure = function(a) {
      this.i = a
    };
    k.init = function(a, b) {
      var c = {},
        d = [];
      this.C = b;
      this.m = a.offlineSessionIds;
      Kc(this, a, b || 0 < a.offlineSessionIds.length, c, d);
      return d.length ? Lc(this, c, d) : (this.B = !0, Promise.resolve())
    };

    function Mc(a, b) {
      if (!a.g) return y(a.f, b, "encrypted", function() {
        this.f.ka(b, "encrypted");
        this.h(new v(6, 6010))
      }.bind(a)), Promise.resolve();
      a.l = b;
      var c = a.l.setMediaKeys(a.g),
        c = c["catch"](function(a) {
          return Promise.reject(new v(6, 6003, a.message))
        }),
        d = null;
      a.b.serverCertificate && (d = a.g.setServerCertificate(a.b.serverCertificate), d = d["catch"](function(a) {
        return Promise.reject(new v(6, 6004, a.message))
      }));
      return Promise.all([c, d]).then(function() {
        if (this.c) return Promise.reject();
        Nc(this);
        this.b.initData.length ||
          this.m.length || y(this.f, this.l, "encrypted", this.ic.bind(this))
      }.bind(a))["catch"](function(a) {
        return this.c ? Promise.resolve() : Promise.reject(a)
      }.bind(a))
    }

    function Oc(a, b) {
      return Promise.all(b.map(function(a) {
        return Pc(this, a).then(function(a) {
          if (a) {
            for (var b = new w, c = 0; c < this.a.length; c++)
              if (this.a[c].ga == a) {
                this.a[c].lb = b;
                break
              }
            return Promise.all([a.remove(), b])
          }
        }.bind(this))
      }.bind(a)))
    }

    function Nc(a) {
      var b = a.b ? a.b.initData : [];
      b.forEach(function(a) {
        Qc(this, a.initDataType, a.initData)
      }.bind(a));
      a.m.forEach(function(a) {
        Pc(this, a)
      }.bind(a));
      b.length || a.m.length || a.j.resolve();
      return a.j
    }
    k.keySystem = function() {
      return this.b ? this.b.keySystem : ""
    };

    function Rc(a) {
      return a.a.map(function(a) {
        return a.ga.sessionId
      })
    }

    function Kc(a, b, c, d, e) {
      var f = Sc(a);
      b.periods.forEach(function(a) {
        a.streamSets.forEach(function(a) {
          "text" != a.type && (f && (a.drmInfos = [f]), a.drmInfos.forEach(function(b) {
            Tc(this, b);
            var f = d[b.keySystem];
            f || (f = {
              audioCapabilities: [],
              videoCapabilities: [],
              distinctiveIdentifier: "optional",
              persistentState: c ? "required" : "optional",
              sessionTypes: [c ? "persistent-license" : "temporary"],
              label: b.keySystem,
              drmInfos: []
            }, d[b.keySystem] = f, e.push(b.keySystem));
            f.drmInfos.push(b);
            b.distinctiveIdentifierRequired && (f.distinctiveIdentifier =
              "required");
            b.persistentStateRequired && (f.persistentState = "required");
            var g = "video" == a.type ? f.videoCapabilities : f.audioCapabilities,
              h = ("video" == a.type ? b.videoRobustness : b.audioRobustness) || "";
            a.streams.forEach(function(a) {
              var c = a.mimeType;
              a.codecs && (c += '; codecs="' + a.codecs + '"');
              a.keyId && b.keyIds.push(a.keyId);
              g.push({
                robustness: h,
                contentType: c
              })
            }.bind(this))
          }.bind(this)))
        }.bind(this))
      }.bind(a))
    }

    function Lc(a, b, c) {
      if (1 == c.length && "" == c[0]) return Promise.reject(new v(6, 6E3));
      var d = new w,
        e = d;
      [!0, !1].forEach(function(a) {
        c.forEach(function(c) {
          var d = b[c];
          d.drmInfos.some(function(a) {
            return !!a.licenseServerUri
          }) == a && (d.audioCapabilities.length || delete d.audioCapabilities, d.videoCapabilities.length || delete d.videoCapabilities, e = e["catch"](function() {
            return this.c ? Promise.reject() : navigator.requestMediaKeySystemAccess(c, [d])
          }.bind(this)))
        }.bind(this))
      }.bind(a));
      e = e["catch"](function() {
        return Promise.reject(new v(6,
          6001))
      });
      e = e.then(function(a) {
        if (this.c) return Promise.reject();
        var c = 0 <= navigator.userAgent.indexOf("Edge/"),
          d = a.getConfiguration();
        this.s = (d.audioCapabilities || []).concat(d.videoCapabilities || []).map(function(a) {
          return a.contentType
        });
        c && (this.s = null);
        c = b[a.keySystem];
        Uc(this, a.keySystem, c, c.drmInfos);
        return this.b.licenseServerUri ? a.createMediaKeys() : Promise.reject(new v(6, 6012))
      }.bind(a)).then(function(a) {
        if (this.c) return Promise.reject();
        this.g = a;
        this.B = !0
      }.bind(a))["catch"](function(a) {
        if (this.c) return Promise.resolve();
        this.s = this.b = null;
        return a instanceof v ? Promise.reject(a) : Promise.reject(new v(6, 6002, a.message))
      }.bind(a));
      d.reject();
      return e
    }

    function Tc(a, b) {
      var c = b.keySystem;
      if (c) {
        if (!b.licenseServerUri) {
          var d = a.i.servers[c];
          d && (b.licenseServerUri = d)
        }
        b.keyIds || (b.keyIds = []);
        if (c = a.i.advanced[c]) b.distinctiveIdentifierRequired || (b.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), b.persistentStateRequired || (b.persistentStateRequired = c.persistentStateRequired), b.videoRobustness || (b.videoRobustness = c.videoRobustness), b.audioRobustness || (b.audioRobustness = c.audioRobustness), b.serverCertificate || (b.serverCertificate = c.serverCertificate)
      }
    }

    function Sc(a) {
      if (Na(a.i.clearKeys)) return null;
      var b = [],
        c = [],
        d;
      for (d in a.i.clearKeys) {
        var e = a.i.clearKeys[d],
          f = Sa(d),
          e = Sa(e),
          f = {
            kty: "oct",
            kid: Qa(f),
            k: Qa(e)
          };
        b.push(f);
        c.push(f.kid)
      }
      a = JSON.stringify({
        keys: b
      });
      c = JSON.stringify({
        kids: c
      });
      c = [{
        initData: new Uint8Array(Ib(c)),
        initDataType: "keyids"
      }];
      return {
        keySystem: "org.w3.clearkey",
        licenseServerUri: "data:application/json;base64," + window.btoa(a),
        distinctiveIdentifierRequired: !1,
        persistentStateRequired: !1,
        audioRobustness: "",
        videoRobustness: "",
        serverCertificate: null,
        initData: c,
        keyIds: []
      }
    }

    function Uc(a, b, c, d) {
      var e = [],
        f = [],
        g = [],
        h = [];
      Vc(d, e, f, g, h);
      a.b = {
        keySystem: b,
        licenseServerUri: e[0],
        distinctiveIdentifierRequired: "required" == c.distinctiveIdentifier,
        persistentStateRequired: "required" == c.persistentState,
        audioRobustness: c.audioCapabilities ? c.audioCapabilities[0].robustness : "",
        videoRobustness: c.videoCapabilities ? c.videoCapabilities[0].robustness : "",
        serverCertificate: f[0],
        initData: g,
        keyIds: h
      }
    }

    function Vc(a, b, c, d, e) {
      function f(a, b) {
        return a.initDataType == b.initDataType && Ua(a.initData, b.initData)
      }
      a.forEach(function(a) {
        -1 == b.indexOf(a.licenseServerUri) && b.push(a.licenseServerUri);
        a.serverCertificate && -1 == Gc(c, a.serverCertificate, Ua) && c.push(a.serverCertificate);
        a.initData && a.initData.forEach(function(a) {
          -1 == Gc(d, a, f) && d.push(a)
        });
        if (a.keyIds)
          for (var g = 0; g < a.keyIds.length; ++g) - 1 == e.indexOf(a.keyIds[g]) && e.push(a.keyIds[g])
      })
    }
    k.ic = function(a) {
      for (var b = new Uint8Array(a.initData), c = 0; c < this.a.length; ++c)
        if (Ua(b, this.a[c].initData)) return;
      Qc(this, a.initDataType, b)
    };

    function Pc(a, b) {
      var c;
      try {
        c = a.g.createSession("persistent-license")
      } catch (f) {
        var d = new v(6, 6005, f.message);
        a.h(d);
        return Promise.reject(d)
      }
      y(a.f, c, "message", a.Bb.bind(a));
      y(a.f, c, "keystatuseschange", a.wb.bind(a));
      var e = {
        initData: null,
        ga: c,
        loaded: !1,
        lb: null
      };
      a.a.push(e);
      return c.load(b).then(function(a) {
        if (!this.c) {
          if (a) return e.loaded = !0, this.a.every(function(a) {
            return a.loaded
          }) && this.j.resolve(), c;
          this.a.splice(this.a.indexOf(e), 1);
          this.h(new v(6, 6013))
        }
      }.bind(a), function(a) {
        this.c || (this.a.splice(this.a.indexOf(e),
          1), this.h(new v(6, 6005, a.message)))
      }.bind(a))
    }

    function Qc(a, b, c) {
      var d;
      try {
        d = a.C ? a.g.createSession("persistent-license") : a.g.createSession()
      } catch (e) {
        a.h(new v(6, 6005, e.message));
        return
      }
      y(a.f, d, "message", a.Bb.bind(a));
      y(a.f, d, "keystatuseschange", a.wb.bind(a));
      a.a.push({
        initData: c,
        ga: d,
        loaded: !1,
        lb: null
      });
      d.generateRequest(b, c.buffer)["catch"](function(a) {
        if (!this.c) {
          for (var b = 0; b < this.a.length; ++b)
            if (this.a[b].ga == d) {
              this.a.splice(b, 1);
              break
            }
          this.h(new v(6, 6006, a.message))
        }
      }.bind(a))
    }
    k.Bb = function(a) {
      for (var b = a.target, c, d = 0; d < this.a.length; d++)
        if (this.a[d].ga == b) {
          c = this.a[d].lb;
          break
        }
      d = rc([this.b.licenseServerUri], this.i.retryParameters);
      d.body = a.message;
      d.method = "POST";
      "com.microsoft.playready" == this.b.keySystem && Wc(d);
      this.G.request(2, d).then(function(a) {
        return this.c ? Promise.reject() : b.update(a.data).then(function() {
          c && c.resolve()
        })
      }.bind(this), function(a) {
        if (this.c) return Promise.resolve();
        a = new v(6, 6007, a);
        this.h(a);
        c && c.reject(a)
      }.bind(this))["catch"](function(a) {
        if (this.c) return Promise.resolve();
        a = new v(6, 6008, a.message);
        this.h(a);
        c && c.reject(a)
      }.bind(this))
    };

    function Wc(a) {
      for (var b = Gb(a.body, !0), b = (new DOMParser).parseFromString(b, "application/xml"), c = b.getElementsByTagName("HttpHeader"), d = 0; d < c.length; ++d) a.headers[c[d].querySelector("name").textContent] = c[d].querySelector("value").textContent;
      a.body = Ra(b.querySelector("Challenge").textContent).buffer
    }
    k.wb = function(a) {
      a = a.target;
      var b;
      for (b = 0; b < this.a.length && this.a[b].ga != a; ++b);
      if (b != this.a.length) {
        var c = !1;
        a.keyStatuses.forEach(function(a, d) {
          if ("string" == typeof d) {
            var e = d;
            d = a;
            a = e
          }
          if ("com.microsoft.playready" == this.b.keySystem && 16 == d.byteLength) {
            var e = new DataView(d),
              f = e.getUint32(0, !0),
              l = e.getUint16(4, !0),
              n = e.getUint16(6, !0);
            e.setUint32(0, f, !1);
            e.setUint16(4, l, !1);
            e.setUint16(6, n, !1)
          }
          "com.microsoft.playready" == this.b.keySystem && "status-pending" == a && (a = "usable");
          "status-pending" != a && (this.a[b].loaded = !0, this.a.every(function(a) {
            return a.loaded
          }) && this.j.resolve());
          "expired" == a && (c = !0);
          e = Ta(new Uint8Array(d));
          this.w[e] = a
        }.bind(this));
        var d = a.expiration - Date.now();
        if (0 > d || c && 1E3 > d) this.a.splice(b, 1), a.close();
        Ic(this.v)
      }
    };
    k.Cc = function() {
      Pa(this.w, function(a, b) {
        return "expired" == b
      }) && this.h(new v(6, 6014));
      this.J(this.w)
    };

    function Yc() {
      var a = [],
        b = [{
          contentType: 'video/mp4; codecs="avc1.42E01E"'
        }, {
          contentType: 'video/webm; codecs="vp8"'
        }],
        c = [{
          videoCapabilities: b,
          persistentState: "required",
          sessionTypes: ["persistent-license"]
        }, {
          videoCapabilities: b
        }],
        d = {};
      "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(b) {
        var e = navigator.requestMediaKeySystemAccess(b, c).then(function(a) {
          return a.createMediaKeys()
        }).then(function(a) {
          var c = !1;
          try {
            a.createSession("persistent-license"), c = !0
          } catch (l) {}
          d[b] = {
            persistentState: c
          }
        }, function() {
          d[b] = null
        });
        a.push(e)
      });
      return Promise.all(a).then(function() {
        return d
      })
    };

    function Zc(a) {
      return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null
    }

    function $c(a, b) {
      var c = 0;
      if (!a || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return c;
      var d = !1,
        e = 1E-4;
      b || (e = .25);
      for (var f = 0; f < a.length; ++f)
        if (b + e >= a.start(f) && b < a.end(f)) c += a.end(f) - b, d = !0;
        else if (d && .04 >= a.start(f) - a.end(f - 1)) c += a.end(f) - a.start(f), c += a.start(f) - a.end(f - 1);
      else if (0 < f && b + e < a.start(f) && b + e >= a.end(f - 1))
        if (.04 >= a.start(f) - b) c += a.end(f) - b, d = !0;
        else break;
      else d = !1;
      return c
    };

    function ad(a, b, c) {
      this.f = a;
      this.h = b;
      this.j = c;
      this.c = {};
      this.b = null;
      this.a = {};
      this.g = new x;
      this.i = !1
    }

    function bd() {
      var a = {};
      'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hvc1.1.6.L93.90",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(b) {
        a[b] = !!R[b] ||
          MediaSource.isTypeSupported(b);
        var c = b.split(";")[0];
        a[c] = a[c] || a[b]
      });
      return a
    }
    k = ad.prototype;
    k.o = function() {
      this.i = !0;
      var a = [],
        b;
      for (b in this.a) {
        var c = this.a[b],
          d = c[0];
        this.a[b] = c.slice(0, 1);
        d && a.push(d.p["catch"](C));
        for (d = 1; d < c.length; ++d) c[d].p["catch"](C), c[d].p.reject()
      }
      this.b && a.push(this.b.o());
      return Promise.all(a).then(function() {
        this.g.o();
        this.b = this.j = this.h = this.f = this.g = null;
        this.c = {};
        this.a = {}
      }.bind(this))
    };
    k.init = function(a, b) {
      for (var c in a) {
        var d = a[c];
        "text" == c ? this.b = new wc(this.j, d, b) : (d = this.h.addSourceBuffer(d), y(this.g, d, "error", this.Zc.bind(this, c)), y(this.g, d, "updateend", this.xa.bind(this, c)), this.c[c] = d, this.a[c] = [])
      }
    };

    function cd(a, b) {
      var c;
      "text" == b ? c = a.b.b : (c = dd(a, b), c = !c || 1 == c.length && 1E-6 > c.end(0) - c.start(0) ? null : 1 == c.length && 0 > c.start(0) ? 0 : c.length ? c.start(0) : null);
      return c
    }

    function ed(a, b, c, d) {
      "text" == b ? (b = Ac(a.b, c), !b && d && (b = Ac(a.b, c + d)) && (b += d)) : (a = dd(a, b), b = $c(a, c), !b && d && (b = $c(a, c + d)) && (b += d));
      return b
    }

    function dd(a, b) {
      try {
        return a.c[b].buffered
      } catch (c) {
        return null
      }
    }

    function fd(a, b, c, d, e) {
      return "text" == b ? zc(a.b, c, d, e) : gd(a, b, a.Yc.bind(a, b, c))
    }
    k.remove = function(a, b, c) {
      return "text" == a ? this.b.remove(b, c) : gd(this, a, this.Gb.bind(this, a, b, c))
    };

    function hd(a, b) {
      return "text" == b ? a.b.remove(0, Infinity) : gd(a, b, a.Gb.bind(a, b, 0, a.h.duration))
    }

    function id(a, b, c) {
      return "text" == b ? (a.b.g = c, Promise.resolve()) : gd(a, b, a.Oc.bind(a, b, c))
    }

    function jd(a, b, c) {
      return "text" == b ? (a.b.f = c, Promise.resolve()) : Promise.all([gd(a, b, a.Pb.bind(a, b)), gd(a, b, a.Mc.bind(a, b, c))])
    }
    k.endOfStream = function(a) {
      return kd(this, function() {
        a ? this.h.endOfStream(a) : this.h.endOfStream()
      }.bind(this))
    };
    k.Aa = function(a) {
      return kd(this, function() {
        this.h.duration = a
      }.bind(this))
    };
    k.da = function() {
      return this.h.duration
    };
    k.Yc = function(a, b) {
      this.c[a].appendBuffer(b)
    };
    k.Gb = function(a, b, c) {
      c <= b ? this.xa(a) : this.c[a].remove(b, c)
    };
    k.Pb = function(a) {
      var b = this.c[a].appendWindowEnd;
      this.c[a].abort();
      this.c[a].appendWindowEnd = b;
      this.xa(a)
    };
    k.Yb = function(a) {
      this.f.currentTime -= .001;
      this.xa(a)
    };
    k.Oc = function(a, b) {
      this.c[a].timestampOffset = b;
      this.xa(a)
    };
    k.Mc = function(a, b) {
      this.c[a].appendWindowEnd = b + .04;
      this.xa(a)
    };
    k.Zc = function(a) {
      this.a[a][0].p.reject(new v(3, 3014, this.f.error ? this.f.error.code : 0))
    };
    k.xa = function(a) {
      var b = this.a[a][0];
      b && (b.p.resolve(), md(this, a))
    };

    function gd(a, b, c) {
      if (a.i) return Promise.reject();
      c = {
        start: c,
        p: new w
      };
      a.a[b].push(c);
      if (1 == a.a[b].length) try {
        c.start()
      } catch (d) {
        "QuotaExceededError" == d.name ? c.p.reject(new v(3, 3017, b)) : c.p.reject(new v(3, 3015, d)), md(a, b)
      }
      return c.p
    }

    function kd(a, b) {
      if (a.i) return Promise.reject();
      var c = [],
        d;
      for (d in a.c) {
        var e = new w,
          f = {
            start: function(a) {
              a.resolve()
            }.bind(null, e),
            p: e
          };
        a.a[d].push(f);
        c.push(e);
        1 == a.a[d].length && f.start()
      }
      return Promise.all(c).then(function() {
        var a, c;
        try {
          b()
        } catch (l) {
          c = Promise.reject(new v(3, 3015, l))
        }
        for (a in this.c) md(this, a);
        return c
      }.bind(a), function() {
        return Promise.reject()
      }.bind(a))
    }

    function md(a, b) {
      a.a[b].shift();
      var c = a.a[b][0];
      if (c) try {
        c.start()
      } catch (d) {
        c.p.reject(new v(3, 3015, d)), md(a, b)
      }
    };

    function nd(a, b, c) {
      var d = !1;
      a.streamSets.forEach(function(a) {
        a.streams.forEach(function(e) {
          var f = e.allowedByApplication;
          e.allowedByApplication = !0;
          if ("video" == a.type) {
            if (e.width < b.minWidth || e.width > b.maxWidth || e.width > c.width || e.height < b.minHeight || e.height > b.maxHeight || e.height > c.height || e.width * e.height < b.minPixels || e.width * e.height > b.maxPixels || e.bandwidth < b.minVideoBandwidth || e.bandwidth > b.maxVideoBandwidth) e.allowedByApplication = !1
          } else "audio" == a.type && (e.bandwidth < b.minAudioBandwidth || e.bandwidth >
            b.maxAudioBandwidth) && (e.allowedByApplication = !1);
          f != e.allowedByApplication && (d = !0)
        })
      });
      return d
    }

    function od(a, b, c) {
      var d = "",
        e = null;
      a && a.B && (d = a.keySystem(), e = a.s);
      for (a = 0; a < c.streamSets.length; ++a) {
        var f = c.streamSets[a];
        if (d && f.drmInfos.length && !f.drmInfos.some(function(a) {
            return a.keySystem == d
          })) c.streamSets.splice(a, 1), --a;
        else {
          for (var g = b[f.type], h = 0; h < f.streams.length; ++h) {
            var l = f.streams[h],
              n = pd(l.mimeType, l.codecs);
            R[n] || MediaSource.isTypeSupported(n) ? e && l.encrypted && 0 > e.indexOf(n) ? (f.streams.splice(h, 1), --h) : !g || l.mimeType == g.mimeType && l.codecs.split(".")[0] == g.codecs.split(".")[0] ||
              (f.streams.splice(h, 1), --h) : (f.streams.splice(h, 1), --h)
          }
          f.streams.length || (c.streamSets.splice(a, 1), --a)
        }
      }
    }

    function qd(a, b) {
      return a.streamSets.map(function(a) {
        var c = b ? b[a.type] : null;
        return a.streams.filter(function(a) {
          return a.allowedByApplication && a.allowedByKeySystem
        }).map(function(b) {
          return {
            id: b.id,
            active: c == b,
            type: a.type,
            bandwidth: b.bandwidth,
            language: a.language,
            kind: b.kind || null,
            width: b.width || null,
            height: b.height || null,
            frameRate: b.frameRate || void 0,
            codecs: b.codecs || null
          }
        })
      }).reduce(B, [])
    }

    function rd(a, b) {
      for (var c = 0; c < a.streamSets.length; c++)
        for (var d = a.streamSets[c], e = 0; e < d.streams.length; e++) {
          var f = d.streams[e];
          if (f.id == b.id) return {
            stream: f,
            ad: d
          }
        }
      return null
    }

    function sd(a) {
      return a.streams.some(function(a) {
        return a.allowedByApplication && a.allowedByKeySystem
      })
    }

    function td(a, b, c) {
      var d = {};
      a.streamSets.forEach(function(a) {
        !sd(a) || a.type in d || (d[a.type] = a)
      });
      var e = 0;
      a.streamSets.forEach(function(a) {
        if (sd(a) && "video" == a.type) {
          var b = ud(a);
          b > e ? (e = b, d.video = a) : b == e && vd(a) < vd(d.video) && (d.video = a)
        }
      });
      a.streamSets.forEach(function(a) {
        sd(a) && a.primary && (d[a.type].primary ? vd(a) < vd(d[a.type]) && (d[a.type] = a) : d[a.type] = a)
      });
      [Dc, Cc, 0].forEach(function(e) {
        a.streamSets.forEach(function(a) {
          if (sd(a)) {
            var f;
            "audio" == a.type ? f = b.preferredAudioLanguage : "text" == a.type && (f = b.preferredTextLanguage);
            if (f) {
              f = Ec(f);
              var g = Ec(a.language);
              Bc(e, f, g) && (a.language == d[a.type].language ? vd(a) < vd(d[a.type]) && (d[a.type] = a) : d[a.type] = a, c && (c[a.type] = !0))
            }
          }
        })
      });
      return d
    }

    function vd(a) {
      var b = 0;
      if (!a || 1 > a.streams.length) return b;
      a.streams.forEach(function(a) {
        b += a.bandwidth
      });
      return b / a.streams.length
    }

    function ud(a) {
      var b = 0;
      if (!a) return b;
      a.streams.forEach(function(a) {
        a.height > b && (b = a.height)
      });
      return b
    }

    function pd(a, b) {
      var c = a;
      b && (c += '; codecs="' + b + '"');
      return c
    };

    function wd() {
      this.m = this.l = this.j = this.c = this.a = null;
      this.h = [];
      this.b = null;
      this.g = [];
      this.v = 1;
      this.i = {};
      this.s = 0;
      this.f = null;
      this.La = this.La.bind(this)
    }
    m("shaka.dash.DashParser", wd);
    k = wd.prototype;
    k.configure = function(a) {
      this.c = a
    };
    k.start = function(a, b, c, d, e) {
      this.h = [a];
      this.a = b;
      this.j = c;
      this.l = d;
      this.m = e;
      return xd(this).then(function() {
        this.a && yd(this, 0);
        return this.b
      }.bind(this))
    };
    k.stop = function() {
      this.a && this.a.Nb(this.La);
      this.c = this.m = this.l = this.j = this.a = null;
      this.h = [];
      this.b = null;
      this.g = [];
      this.i = {};
      null != this.f && (window.clearTimeout(this.f), this.f = null);
      return Promise.resolve()
    };

    function xd(a) {
      return a.a.request(0, rc(a.h, a.c.retryParameters)).then(function(a) {
        if (this.a) return zd(this, a.data, a.uri)
      }.bind(a))
    }

    function zd(a, b, c) {
      var d = Eb(b),
        e = new DOMParser,
        f = null;
      b = null;
      try {
        f = e.parseFromString(d, "text/xml")
      } catch (X) {}
      f && "MPD" == f.documentElement.tagName && (b = f.documentElement);
      if (!b) throw new v(4, 4001);
      c = [c];
      d = G(b, "Location").map(Wa).filter(Ka);
      0 < d.length && (c = a.h = d);
      d = G(b, "BaseURL").map(Wa);
      c = K(c, d);
      var g = H(b, "minBufferTime", I);
      a.s = H(b, "minimumUpdatePeriod", I, -1);
      var h = H(b, "availabilityStartTime", Xa),
        d = H(b, "timeShiftBufferDepth", I),
        l = H(b, "suggestedPresentationDelay", I),
        e = H(b, "maxSegmentDuration", I),
        f = b.getAttribute("type") ||
        "static",
        n;
      if (a.b) n = a.b.presentationTimeline;
      else {
        var r = Math.max(10, 1.5 * g);
        n = new Q(h, null != l ? l : r)
      }
      var h = Ad(a, {
          Ra: "static" != f,
          presentationTimeline: n,
          K: null,
          H: null,
          P: null,
          u: null,
          bandwidth: void 0,
          tb: !1
        }, c, b),
        l = h.duration,
        u = h.periods;
      n.Lb("static" == f);
      n.Aa(l || Infinity);
      n.Kb(null != d ? d : Infinity);
      n.Za(e || 1);
      if (a.b) return Promise.resolve();
      b = G(b, "UTCTiming");
      d = n.R();
      h.ba && a.a.Eb(a.La);
      return Bd(a, c, b, d).then(function(a) {
        this.a && (n.Jb(a), this.b = {
          presentationTimeline: n,
          periods: u,
          offlineSessionIds: [],
          minBufferTime: g ||
            0
        })
      }.bind(a))
    }

    function Ad(a, b, c, d) {
      var e = H(d, "mediaPresentationDuration", I),
        f = !1,
        g = [],
        h = 0;
      d = G(d, "Period");
      for (var l = 0; l < d.length; l++) {
        var n = d[l],
          h = H(n, "start", I, h),
          r = H(n, "duration", I);
        if (null == r)
          if (l + 1 != d.length) {
            var u = H(d[l + 1], "start", I);
            null != u && (r = u - h)
          } else null != e && (r = e - h);
        u = {
          start: h,
          duration: r,
          node: n,
          ba: !1
        };
        n = Cd(a, b, c, u);
        g.push(n);
        f = f || u.ba;
        u = b.K.id;
        a.g.every(La(u)) && (a.j(n), a.g.push(u), a.b && a.b.periods.push(n));
        if (null == r) {
          h = null;
          break
        }
        h += r
      }
      return null != e ? {
        periods: g,
        duration: e,
        ba: f
      } : {
        periods: g,
        duration: h,
        ba: f
      }
    }

    function Cd(a, b, c, d) {
      b.K = Dd(d.node, null, c);
      b.H = d;
      b.K.id || (b.K.id = "__shaka_period_" + d.start);
      a = G(d.node, "AdaptationSet").map(a.yc.bind(a, b)).filter(Ka);
      b = a.map(function(a) {
        return a.Gc
      }).reduce(B, []);
      c = b.filter(Ma);
      if (b.length != c.length) throw new v(4, 4018);
      if (!a.length) throw new v(4, 4004);
      for (b = 0; b < a.length; b++) a[b].ba && (d.ba = !0);
      a = Ed(a);
      return {
        startTime: d.start,
        streamSets: a
      }
    }
    k.yc = function(a, b) {
      a.P = Dd(b, a.K, null);
      var c = !1,
        d = G(b, "Role"),
        e = void 0;
      "text" == a.P.contentType && (e = "subtitle");
      for (var f = 0; f < d.length; f++) {
        var g = d[f].getAttribute("schemeIdUri");
        if (null == g || "urn:mpeg:dash:role:2011" == g) switch (g = d[f].getAttribute("value"), g) {
          case "main":
            c = !0;
            break;
          case "caption":
          case "subtitle":
            e = g
        }
      }
      var d = Fd(b),
        h = [];
      G(b, "SupplementalProperty").forEach(function(a) {
        var b = a.getAttribute("schemeIdUri");
        ("urn:mpeg:dash:adaptation-set-switching:2016" == b || "http://dashif.org/guidelines/AdaptationSetSwitching" ==
          b || "http://dashif.org/descriptor/AdaptationSetSwitching" == b) && (a = a.getAttribute("value")) && h.push.apply(h, a.split(","))
      });
      var l = null,
        n = !1;
      G(b, "EssentialProperty").forEach(function(a) {
        "http://dashif.org/guidelines/trickmode" == a.getAttribute("schemeIdUri") ? l = a.getAttribute("value") : n = !0
      });
      if (null != l || n) return null;
      var f = G(b, "ContentProtection"),
        f = eb(f, this.c.dash.customScheme),
        g = Ec(b.getAttribute("lang") || "und"),
        r = G(b, "Representation"),
        e = r.map(this.zc.bind(this, a, f, e, g)).filter(function(a) {
          return !!a
        });
      if (!e.length) throw new v(4, 4003);
      a.P.contentType || (a.P.contentType = Gd(e[0].mimeType, e[0].codecs));
      r = r.map(function(a) {
        return a.getAttribute("id")
      }).filter(Ka);
      return {
        id: a.P.id || "__fake__" + this.v++,
        contentType: a.P.contentType,
        language: g,
        gc: c,
        streams: e,
        drmInfos: f.drmInfos,
        cd: h,
        ba: d,
        Gc: r
      }
    };

    function Fd(a) {
      if (Va(a, "InbandEventStream")) return !0;
      a = G(a, "Representation");
      var b;
      if (0 < a.length)
        for (var c = 0; c < a.length; c++)
          if (b = Va(a[c], "InbandEventStream")) return !0;
      return !1
    }
    k.zc = function(a, b, c, d, e) {
      a.u = Dd(e, a.P, null);
      if (!Hd(a.u)) return null;
      a.bandwidth = H(e, "bandwidth", $a) || void 0;
      var f;
      f = this.Hc.bind(this);
      if (a.u.Ia) f = dc(a, f);
      else if (a.u.Z) f = gc(a, this.i);
      else if (a.u.Ja) f = kc(a, f, this.i, !!this.b);
      else {
        var g = a.u.M,
          h = a.H.duration || 0;
        f = {
          createSegmentIndex: Promise.resolve.bind(Promise),
          findSegmentPosition: function(a) {
            return 0 <= a && a < h ? 1 : null
          },
          getSegmentReference: function(a) {
            return 1 != a ? null : new J(1, 0, h, function() {
              return g
            }, 0, null)
          },
          initSegmentReference: null,
          presentationTimeOffset: 0
        }
      }
      e =
        G(e, "ContentProtection");
      e = ib(e, this.c.dash.customScheme, b);
      return {
        id: this.v++,
        createSegmentIndex: f.createSegmentIndex,
        findSegmentPosition: f.findSegmentPosition,
        getSegmentReference: f.getSegmentReference,
        initSegmentReference: f.initSegmentReference,
        presentationTimeOffset: f.presentationTimeOffset,
        mimeType: a.u.mimeType,
        codecs: a.u.codecs,
        frameRate: a.u.frameRate,
        bandwidth: a.bandwidth,
        width: a.u.width,
        height: a.u.height,
        kind: c,
        encrypted: 0 < b.drmInfos.length,
        keyId: e,
        language: d,
        allowedByApplication: !0,
        allowedByKeySystem: !0
      }
    };
    k.Xc = function() {
      this.f = null;
      var a = Date.now();
      xd(this).then(function() {
        this.a && yd(this, (Date.now() - a) / 1E3)
      }.bind(this))["catch"](function(a) {
        this.l(a);
        this.a && yd(this, 0)
      }.bind(this))
    };

    function yd(a, b) {
      0 > a.s || (a.f = window.setTimeout(a.Xc.bind(a), 1E3 * Math.max(Math.max(3, a.s) - b, 0)))
    }

    function Dd(a, b, c) {
      b = b || {
        contentType: "",
        mimeType: "",
        codecs: "",
        frameRate: void 0
      };
      c = c || b.M;
      var d = G(a, "BaseURL").map(Wa),
        e = a.getAttribute("contentType") || b.contentType,
        f = a.getAttribute("mimeType") || b.mimeType,
        g = a.getAttribute("codecs") || b.codecs,
        h = H(a, "frameRate", cb) || b.frameRate;
      e || (e = Gd(f, g));
      return {
        M: K(c, d),
        Ia: Va(a, "SegmentBase") || b.Ia,
        Z: Va(a, "SegmentList") || b.Z,
        Ja: Va(a, "SegmentTemplate") || b.Ja,
        width: H(a, "width", bb) || b.width,
        height: H(a, "height", bb) || b.height,
        contentType: e,
        mimeType: f,
        codecs: g,
        frameRate: h,
        id: a.getAttribute("id")
      }
    }

    function Ed(a) {
      var b = {};
      a.forEach(function(a) {
        b[a.id] = [a]
      });
      a.forEach(function(a) {
        var c = b[a.id];
        a.cd.forEach(function(a) {
          (a = b[a]) && a != c && (c.push.apply(c, a), a.forEach(function(a) {
            b[a.id] = c
          }))
        })
      });
      var c = [],
        d = [];
      F(b).forEach(function(a) {
        if (!(0 <= d.indexOf(a))) {
          d.push(a);
          var b = new Ba;
          a.forEach(function(a) {
            b.push(a.contentType || "", a)
          });
          b.keys().forEach(function(a) {
            var d = new Ba;
            b.get(a).forEach(function(a) {
              d.push(a.language, a)
            });
            d.keys().forEach(function(b) {
              var e = d.get(b);
              b = {
                language: b,
                type: a,
                primary: e.some(function(a) {
                  return a.gc
                }),
                drmInfos: e.map(function(a) {
                  return a.drmInfos
                }).reduce(B, []),
                streams: e.map(function(a) {
                  return a.streams
                }).reduce(B, [])
              };
              c.push(b)
            })
          })
        }
      });
      return c
    }

    function Hd(a) {
      var b;
      b = 0 + (a.Ia ? 1 : 0);
      b += a.Z ? 1 : 0;
      b += a.Ja ? 1 : 0;
      if (!b) return "text" == a.contentType || "application" == a.contentType ? !0 : !1;
      1 != b && (a.Ia && (a.Z = null), a.Ja = null);
      return !0
    }

    function Id(a, b, c, d) {
      b = K(b, [c]);
      b = rc(b, a.c.retryParameters);
      b.method = d;
      return a.a.request(0, b).then(function(a) {
        if ("HEAD" == d) {
          if (!a.headers || !a.headers.date) return 0;
          a = a.headers.date
        } else a = Eb(a.data);
        a = Date.parse(a);
        return isNaN(a) ? 0 : a - Date.now()
      })
    }

    function Bd(a, b, c, d) {
      c = c.map(function(a) {
        return {
          scheme: a.getAttribute("schemeIdUri"),
          value: a.getAttribute("value")
        }
      });
      var e = a.c.dash.clockSyncUri;
      d && !c.length && e && c.push({
        scheme: "urn:mpeg:dash:utc:http-head:2014",
        value: e
      });
      return Ja(c, function(a) {
        var c = a.value;
        switch (a.scheme) {
          case "urn:mpeg:dash:utc:http-head:2014":
          case "urn:mpeg:dash:utc:http-head:2012":
            return Id(this, b, c, "HEAD");
          case "urn:mpeg:dash:utc:http-xsdate:2014":
          case "urn:mpeg:dash:utc:http-iso:2014":
          case "urn:mpeg:dash:utc:http-xsdate:2012":
          case "urn:mpeg:dash:utc:http-iso:2012":
            return Id(this,
              b, c, "GET");
          case "urn:mpeg:dash:utc:direct:2014":
          case "urn:mpeg:dash:utc:direct:2012":
            return a = Date.parse(c), isNaN(a) ? 0 : a - Date.now();
          case "urn:mpeg:dash:utc:http-ntp:2014":
          case "urn:mpeg:dash:utc:ntp:2014":
          case "urn:mpeg:dash:utc:sntp:2014":
            return Promise.reject();
          default:
            return Promise.reject()
        }
      }.bind(a))["catch"](function() {
        return 0
      })
    }
    k.Hc = function(a, b, c) {
      a = rc(a, this.c.retryParameters);
      null != b && (a.headers.Range = "bytes=" + b + "-" + (null != c ? c : ""));
      return this.a.request(1, a).then(function(a) {
        return a.data
      })
    };
    k.La = function(a, b) {
      if (1 == a) {
        var c = new Jb(new DataView(b.data)),
          d = Sb(1701671783, c);
        if (-1 != d) {
          var e = c.a - 8 + d;
          N(c, 4);
          d = Rb(c);
          if ("urn:mpeg:dash:event:2012" == d) xd(this);
          else {
            var f = Rb(c),
              g = M(c),
              h = M(c),
              l = M(c),
              n = M(c),
              c = Qb(c, e - c.a);
            this.m(new t("emsg", {
              detail: {
                rd: d,
                value: f,
                Oa: g,
                qd: h,
                od: l,
                id: n,
                pd: c
              }
            }))
          }
        }
      }
    };

    function Gd(a, b) {
      return R[pd(a, b)] ? "text" : a.split("/")[0]
    }
    tc.mpd = wd;
    sc["application/dash+xml"] = wd;

    function S(a, b) {
      var c = Eb(a),
        d = [],
        e = new DOMParser,
        f = null;
      try {
        f = e.parseFromString(c, "text/xml")
      } catch (r) {
        throw new v(2, 2005);
      }
      if (f) {
        var g, h, l;
        if (e = f.getElementsByTagName("tt")[0]) f = e.getAttribute("ttp:frameRate"), g = e.getAttribute("ttp:subFrameRate"), h = e.getAttribute("ttp:frameRateMultiplier"), l = e.getAttribute("ttp:tickRate"), c = e.getAttribute("xml:space") || "default";
        else throw new v(2, 2006);
        if ("default" != c && "preserve" != c) throw new v(2, 2005);
        c = "default" == c;
        f = new Jd(f, g, h, l);
        g = S.b(e.getElementsByTagName("styling")[0]);
        h = S.b(e.getElementsByTagName("layout")[0]);
        e = S.b(e.getElementsByTagName("body")[0]);
        for (l = 0; l < e.length; l++) {
          var n = S.c(e[l], b, f, g, h, c);
          n && d.push(n)
        }
      }
      return d
    }
    m("shaka.media.TtmlTextParser", S);
    S.m = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
    S.v = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/;
    S.s = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/;
    S.w = /^(\d*\.?\d*)f$/;
    S.C = /^(\d*\.?\d*)t$/;
    S.B = /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/;
    S.l = /^(\d{1,2}|100)% (\d{1,2}|100)%$/;
    S.Da = {
      left: "start",
      center: "center",
      right: "end",
      start: "start",
      end: "end"
    };
    S.Ka = {
      left: "line-left",
      center: "center",
      right: "line-right"
    };
    S.b = function(a) {
      var b = [];
      if (!a) return b;
      for (var c = a.childNodes, d = 0; d < c.length; d++) {
        var e = "span" == c[d].nodeName && "p" == a.nodeName;
        c[d].nodeType != Node.ELEMENT_NODE || "br" == c[d].nodeName || e || (e = S.b(c[d]), b = b.concat(e))
      }
      b.length || b.push(a);
      return b
    };
    S.g = function(a, b) {
      for (var c = a.childNodes, d = 0; d < c.length; d++)
        if ("br" == c[d].nodeName && 0 < d) c[d - 1].textContent += "\n";
        else if (0 < c[d].childNodes.length) S.g(c[d], b);
      else if (b) {
        var e = c[d].textContent.trim(),
          e = e.replace(/\s+/g, " ");
        c[d].textContent = e
      }
    };
    S.c = function(a, b, c, d, e, f) {
      if (!a.hasAttribute("begin") && !a.hasAttribute("end") && /^\s*$/.test(a.textContent)) return null;
      S.g(a, f);
      f = S.a(a.getAttribute("begin"), c);
      var g = S.a(a.getAttribute("end"), c);
      c = S.a(a.getAttribute("dur"), c);
      var h = a.textContent;
      null == g && null != c && (g = f + c);
      if (null == f || null == g) throw new v(2, 2001);
      b = xc(f + b, g + b, h);
      if (!b) return null;
      e = S.i(a, "region", e);
      S.pa(b, a, e, d);
      return b
    };
    S.pa = function(a, b, c, d) {
      var e, f = S.f(b, c, d, "tts:extent");
      f && (e = S.l.exec(f)) && (a.size = Number(e[1]));
      e = S.f(b, c, d, "tts:writingMode");
      f = !0;
      "tb" == e || "tblr" == e ? a.vertical = "lr" : "tbrl" == e ? a.vertical = "rl" : f = !1;
      if (e = S.f(b, c, d, "tts:origin"))
        if (e = S.l.exec(e)) f ? (a.position = Number(e[2]), a.line = Number(e[1])) : (a.position = Number(e[1]), a.line = Number(e[2])), a.snapToLines = !1;
      if (b = S.f(b, c, d, "tts:textAlign")) a.align = b, "center" == b && ("center" != a.align && (a.align = "middle"), a.position = "auto"), a.positionAlign = S.Ka[b], a.lineAlign =
        S.Da[b]
    };
    S.f = function(a, b, c, d) {
      for (var e = S.b(b), f = 0; f < e.length; f++) {
        var g = e[f].getAttribute(d);
        if (g) return g
      }
      e = S.i;
      return (a = e(b, "style", c) || e(a, "style", c)) ? a.getAttribute(d) : null
    };
    S.i = function(a, b, c) {
      if (!a || 1 > c.length) return null;
      var d = null;
      if (a = S.qa(a, b))
        for (b = 0; b < c.length; b++)
          if (c[b].getAttribute("xml:id") == a) {
            d = c[b];
            break
          }
      return d
    };
    S.qa = function(a, b) {
      for (var c = null; a && !(c = a.getAttribute(b));) {
        var d = a.parentNode;
        if (d instanceof Element) a = d;
        else break
      }
      return c
    };
    S.a = function(a, b) {
      var c = null;
      S.m.test(a) ? c = S.ra(b, a) : S.v.test(a) ? c = S.h(S.v, a) : S.s.test(a) ? c = S.h(S.s, a) : S.w.test(a) ? c = S.Ba(b, a) : S.C.test(a) ? c = S.Ca(b, a) : S.B.test(a) && (c = S.h(S.B, a));
      return c
    };
    S.Ba = function(a, b) {
      var c = S.w.exec(b);
      return Number(c[1]) / a.frameRate
    };
    S.Ca = function(a, b) {
      var c = S.C.exec(b);
      return Number(c[1]) / a.a
    };
    S.ra = function(a, b) {
      var c = S.m.exec(b),
        d = Number(c[1]),
        e = Number(c[2]),
        f = Number(c[3]),
        g = Number(c[4]),
        g = g + (Number(c[5]) || 0) / a.b,
        f = f + g / a.frameRate;
      return f + 60 * e + 3600 * d
    };
    S.h = function(a, b) {
      var c = a.exec(b);
      return c && "" != c[0] ? (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0) : null
    };

    function Jd(a, b, c, d) {
      this.frameRate = Number(a) || 30;
      this.b = Number(b) || 1;
      this.a = Number(d);
      this.a || (this.a = a ? this.frameRate * this.b : 1);
      c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= a[1] / a[2])
    }
    R["application/ttml+xml"] = S;

    function Kd(a, b) {
      var c = new Jb(new DataView(a)),
        d = Sb(1835295092, c);
      if (-1 != d) return S(Qb(c, d - 8).buffer, b);
      if (-1 != Tb(a, Kd.T)) return [];
      throw new v(2, 2007);
    }
    m("shaka.media.Mp4TtmlParser", Kd);
    Kd.T = 1937010800;
    R['application/mp4; codecs="stpp"'] = Kd;

    function Ld(a) {
      this.b = a;
      this.a = 0
    }

    function Md(a, b) {
      var c;
      b.lastIndex = a.a;
      c = (c = b.exec(a.b)) ? {
        position: c.index,
        length: c[0].length,
        Jc: c
      } : null;
      if (a.a == a.b.length || !c || c.position != a.a) return null;
      a.a += c.length;
      return c.Jc
    }

    function Nd(a) {
      return a.a == a.b.length ? null : (a = Md(a, /[^ \t\n]*/gm)) ? a[0] : null
    };

    function T(a, b, c, d, e) {
      a = Eb(a);
      a = a.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
      a = a.split(/\n{2,}/m);
      if (!/^WEBVTT($|[ \t\n])/m.test(a[0])) throw new v(2, 2E3);
      d = [];
      for (var f = 1; f < a.length; f++) {
        var g = a[f].split("\n");
        (g = T.c(g, b, c, e)) && d.push(g)
      }
      return d
    }
    m("shaka.media.VttTextParser", T);
    T.c = function(a, b, c, d) {
      if (1 == a.length && !a[0] || /^NOTE($|[ \t])/.test(a[0])) return null;
      var e = null;
      0 > a[0].indexOf("--\x3e") && (e = a[0], a.splice(0, 1));
      var f = new Ld(a[0]),
        g = T.a(f),
        h = Md(f, /[ \t]+--\x3e[ \t]+/g),
        l = T.a(f);
      if (null == g || !h || null == l) throw new v(2, 2001);
      d ? (g += c, l += c) : (g += b, l += b);
      a = xc(g, l, a.slice(1).join("\n").trim());
      if (!a) return null;
      Md(f, /[ \t]+/gm);
      for (b = Nd(f); b;) T.j(a, b), Md(f, /[ \t]+/gm), b = Nd(f);
      null != e && (a.id = e);
      return a
    };
    T.j = function(a, b) {
      var c;
      if (c = /^align:(start|middle|center|end|left|right)$/.exec(b)) a.align = c[1], "center" == c[1] && "center" != a.align && (a.position = "auto", a.align = "middle");
      else if (c = /^vertical:(lr|rl)$/.exec(b)) a.vertical = c[1];
      else if (c = /^size:(\d{1,2}|100)%$/.exec(b)) a.size = Number(c[1]);
      else if (c = /^position:(\d{1,2}|100)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(c[1]), c[2] && (a.positionAlign = c[2]);
      else if (c = /^line:(\d{1,2}|100)%(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !1, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2]);
      else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !0, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2])
    };
    T.a = function(a) {
      a = Md(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
      if (!a) return null;
      var b = Number(a[2]),
        c = Number(a[3]);
      return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0)
    };
    R["text/vtt"] = T;
    R['text/vtt; codecs="vtt"'] = T;

    function U(a, b, c, d) {
      var e = new Jb(new DataView(a)),
        f = Sb(1835295092, e);
      if (-1 != f) return U.sa(Qb(e, f - 8).buffer, b, c, d);
      if (-1 != Tb(a, U.oa)) return [];
      throw new v(2, 2008);
    }
    m("shaka.media.Mp4VttParser", U);
    U.sa = function(a, b, c, d) {
      a = new Jb(new DataView(a));
      c += b;
      d += b;
      for (b = []; Lb(a);) {
        var e = Sb(U.na, a);
        if (-1 == e) break;
        (e = U.c(Qb(a, e - 8).buffer, c, d)) && b.push(e)
      }
      return b
    };
    U.c = function(a, b, c) {
      a = new Jb(new DataView(a));
      for (var d, e, f; Lb(a);) {
        var g = M(a),
          h = M(a),
          l = Eb(Qb(a, g - 8).buffer);
        1 == g && Pb(a);
        switch (h) {
          case U.J:
            d = l;
            break;
          case U.G:
            f = l;
            break;
          case U.X:
            e = l
        }
      }
      if (!d) throw new v(2, 2008);
      b = xc(b, c, d);
      if (!b) return null;
      f && (b.id = f);
      if (e)
        for (e = new Ld(e), f = Nd(e); f;) T.j(b, f), Md(e, /[ \t]+/gm), f = Nd(e);
      return b
    };
    U.oa = 2004251764;
    U.na = 1987343459;
    U.J = 1885436268;
    U.G = 1768187247;
    U.X = 1937011815;
    R['application/mp4; codecs="wvtt"'] = U;

    function Od(a, b, c, d, e, f) {
      this.a = a;
      this.c = b;
      this.j = c;
      this.s = d;
      this.l = e;
      this.m = f;
      this.b = new x;
      this.h = !1;
      this.g = 1;
      this.i = this.f = null;
      0 < a.readyState ? this.xb() : y(this.b, a, "loadedmetadata", this.xb.bind(this));
      y(this.b, a, "ratechange", this.pc.bind(this));
      Pd(this)
    }
    k = Od.prototype;
    k.o = function() {
      var a = this.b.o();
      this.b = null;
      Qd(this);
      null != this.f && (window.clearInterval(this.f), this.f = null);
      this.m = this.l = this.c = this.a = null;
      return a
    };

    function Rd(a) {
      return 0 < a.a.readyState ? Sd(a, a.a.currentTime) : Td(a)
    }

    function Td(a) {
      return a.s ? Sd(a, a.s) : Infinity > a.c.da() ? a.c.ta() : Math.max(a.c.Ua(), a.c.ta())
    }

    function Ud(a, b) {
      b != a.h && (a.h = b, Vd(a, a.g), a.l(b))
    }

    function Pd(a) {
      Qd(a);
      a.i = window.setTimeout(a.tc.bind(a), 250)
    }

    function Qd(a) {
      a.i && (window.clearTimeout(a.i), a.i = null)
    }
    k.tc = function() {
      this.i = null;
      Pd(this);
      var a = $c(this.a.buffered, this.a.currentTime),
        b = Zc(this.a.buffered) >= (this.c.R() ? this.c.Y() - .1 : this.a.duration - .1) || this.a.ended;
      this.h ? (b || a >= this.j) && Ud(this, !1) : !b && .5 > a && Ud(this, !0)
    };
    k.Ta = function() {
      return this.g
    };

    function Vd(a, b) {
      null != a.f && (window.clearInterval(a.f), a.f = null);
      a.g = b;
      a.a.playbackRate = a.h || 0 > b ? 0 : b;
      !a.h && 0 > b && (a.f = window.setInterval(function() {
        this.a.currentTime += b / 4
      }.bind(a), 250))
    }
    k.pc = function() {
      this.a.playbackRate != (this.h || 0 > this.g ? 0 : this.g) && Vd(this, this.a.playbackRate)
    };
    k.xb = function() {
      this.b.ka(this.a, "loadedmetadata");
      var a = Td(this);
      .001 > Math.abs(this.a.currentTime - a) ? (y(this.b, this.a, "seeking", this.zb.bind(this)), y(this.b, this.a, "playing", this.yb.bind(this))) : (y(this.b, this.a, "seeking", this.rc.bind(this)), this.a.currentTime = a)
    };
    k.rc = function() {
      this.b.ka(this.a, "seeking");
      y(this.b, this.a, "seeking", this.zb.bind(this));
      y(this.b, this.a, "playing", this.yb.bind(this))
    };
    k.zb = function() {
      var a = this.a.currentTime,
        b = Wd(this, a);
      .001 < Math.abs(b - a) ? Xd(this, a, b) : this.m()
    };
    k.yb = function() {
      var a = this.a.currentTime,
        b = Wd(this, a);
      .001 < Math.abs(b - a) && Xd(this, a, b)
    };

    function Wd(a, b) {
      var c = a.c,
        d = c.ta(),
        e = c.Y();
      if (!c.R() || Infinity == c.c) return b < d ? d : b > e ? e : b;
      c = d + 1;
      d = c + a.j;
      return b >= d && b <= e || $c(a.a.buffered, b) && b >= c && b <= e ? b : b > e ? e : e < d && b >= c && b <= e ? b : Math.min(d + 2, e)
    }

    function Xd(a, b, c) {
      a.a.currentTime = c;
      var d = 0,
        e = function() {
          !this.a || 10 <= d++ || this.a.currentTime != b || (this.a.currentTime = c, setTimeout(e, 100))
        }.bind(a);
      setTimeout(e, 100)
    }

    function Sd(a, b) {
      var c = a.c.ta();
      if (b < c) return c;
      c = a.c.Y();
      return b > c ? c : b
    };

    function Yd(a, b, c, d, e, f, g, h, l) {
      this.m = a;
      this.f = b;
      this.T = c;
      this.a = d;
      this.G = e;
      this.v = f;
      this.j = g;
      this.w = h || null;
      this.B = l || null;
      this.h = null;
      this.i = 1;
      this.C = Promise.resolve();
      this.g = [];
      this.l = {};
      this.b = {};
      this.c = this.s = this.J = !1
    }
    Yd.prototype.o = function() {
      for (var a in this.b) Zd(this.b[a]);
      this.h = this.b = this.l = this.g = this.B = this.w = this.j = this.v = this.G = this.C = this.a = this.T = this.f = this.m = null;
      this.c = !0;
      return Promise.resolve()
    };
    Yd.prototype.configure = function(a) {
      this.h = a;
      this.m.j = this.i * Math.max(this.a.minBufferTime || 0, this.h.rebufferingGoal)
    };
    Yd.prototype.init = function() {
      var a = this.G(this.a.periods[$d(this, Rd(this.m))]);
      return Na(a) ? Promise.reject(new v(5, 5005)) : ae(this, a).then(function() {
        this.w && this.w()
      }.bind(this))
    };

    function be(a) {
      return a.a.periods[$d(a, Rd(a.m))]
    }

    function ce(a) {
      return Oa(a.b, function(a) {
        return a.stream
      })
    }

    function de(a, b) {
      var c = {};
      c.text = b;
      return ae(a, c)
    }

    function ee(a, b, c, d) {
      var e = a.b[b];
      !e && "text" == b && a.h.ignoreTextStreamFailures ? de(a, c) : e && (b = a.g[fe(a, c)]) && b.za && (b = a.l[c.id]) && b.za && e.stream != c && (e.stream = c, e.Ma = !0, d && (e.aa ? e.Qa = !0 : e.fa ? (e.ma = !0, e.Qa = !0) : (Zd(e), ge(a, e, !0))))
    }

    function he(a) {
      var b = Rd(a.m);
      if (!Object.keys(a.b).every(function(a) {
          return 0 < ed(this.f, a, b)
        }.bind(a)))
        for (var c in a.b) {
          var d = a.b[c];
          d.aa || d.ma || (d.fa ? d.ma = !0 : null == cd(a.f, c) ? null == d.$ && ie(a, d, 0) : (Zd(d), ge(a, d, !1)))
        }
    }

    function ae(a, b) {
      var c = $d(a, Rd(a.m)),
        d = Oa(b, function(a) {
          return pd(a.mimeType, a.codecs)
        });
      a.f.init(d, a.h.useRelativeCueTimestamps);
      je(a);
      d = F(b);
      return ke(a, d).then(function() {
        if (!this.c)
          for (var a in b) {
            var d = b[a];
            this.b[a] || (this.b[a] = {
              stream: d,
              type: a,
              va: null,
              V: null,
              Ma: !0,
              Ga: c,
              endOfStream: !1,
              fa: !1,
              $: null,
              ma: !1,
              Qa: !1,
              aa: !1,
              cb: !1,
              Wa: !1
            }, ie(this, this.b[a], 0))
          }
      }.bind(a))
    }

    function le(a, b) {
      var c = a.g[b];
      if (c) return c.I;
      c = {
        I: new w,
        za: !1
      };
      a.g[b] = c;
      var d = a.a.periods[b].streamSets.map(function(a) {
        return a.streams
      }).reduce(B, []);
      a.C = a.C.then(function() {
        if (!this.c) return ke(this, d)
      }.bind(a)).then(function() {
        this.c || (this.g[b].I.resolve(), this.g[b].za = !0)
      }.bind(a))["catch"](function(a) {
        this.c || (this.g[b].I.reject(), delete this.g[b], this.j(a))
      }.bind(a));
      return c.I
    }

    function ke(a, b) {
      for (var c = [], d = 0; d < b.length; ++d) {
        var e = b[d],
          f = a.l[e.id];
        f ? c.push(f.I) : (a.l[e.id] = {
          I: new w,
          za: !1
        }, c.push(e.createSegmentIndex()))
      }
      return Promise.all(c).then(function() {
        if (!this.c)
          for (var a = 0; a < b.length; ++a) {
            var c = this.l[b[a].id];
            c.za || (c.I.resolve(), c.za = !0)
          }
      }.bind(a))["catch"](function(a) {
        if (!this.c) return this.l[e.id].I.reject(), delete this.l[e.id], Promise.reject(a)
      }.bind(a))
    }

    function je(a) {
      var b = a.a.presentationTimeline.da();
      Infinity > b ? a.f.Aa(b) : a.f.Aa(Math.pow(2, 32))
    }
    Yd.prototype.X = function(a) {
      if (!this.c && !a.fa && null != a.$ && !a.aa)
        if (a.$ = null, a.ma) ge(this, a, a.Qa);
        else {
          try {
            var b = me(this, a);
            null != b && (ie(this, a, b), a.Wa = !1)
          } catch (c) {
            this.j(c);
            return
          }
          b = F(this.b);
          ne(this, a);
          b.every(function(a) {
            return a.endOfStream
          }) && this.f.endOfStream()
        }
    };

    function me(a, b) {
      var c = Rd(a.m),
        d, e = a.f;
      d = b.type;
      d = "text" == d ? e.b.a : Zc(dd(e, d));
      var f = b.va && b.V ? a.a.periods[fe(a, b.va)].startTime + b.V.endTime : c,
        e = fe(a, b.stream),
        g = $d(a, f),
        h = ed(a.f, b.type, c, .1),
        l = Math.max(a.i * Math.max(a.a.minBufferTime || 0, a.h.rebufferingGoal), a.i * a.h.bufferingGoal);
      if (f >= a.a.presentationTimeline.da()) return b.endOfStream = !0, null;
      b.endOfStream = !1;
      b.Ga = g;
      if (g != e) return null;
      if (h >= l) return .5;
      b.V && b.stream == b.va ? (f = b.V.position + 1, d = oe(a, b, e, f)) : (f = b.V ? b.stream.findSegmentPosition(Math.max(0,
        a.a.periods[fe(a, b.va)].startTime + b.V.endTime - a.a.periods[e].startTime)) : b.stream.findSegmentPosition(Math.max(0, (d || c) - a.a.periods[e].startTime)), null == f ? d = null : (g = null, null == d && (g = oe(a, b, e, Math.max(0, f - 1))), d = g || oe(a, b, e, f)));
      if (!d) return 1;
      pe(a, b, c, e, d);
      return null
    }

    function oe(a, b, c, d) {
      c = a.a.periods[c];
      b = b.stream.getSegmentReference(d);
      if (!b) return null;
      a = a.a.presentationTimeline;
      d = a.Y();
      return c.startTime + b.endTime < a.ua() || c.startTime + b.startTime > d ? null : b
    }

    function pe(a, b, c, d, e) {
      var f = a.a.periods[d],
        g = b.stream,
        h = a.a.periods[d + 1],
        l = null,
        l = h ? h.startTime : a.a.presentationTimeline.da();
      d = qe(a, b, d, l);
      b.fa = !0;
      b.Ma = !1;
      h = re(a, e);
      Promise.all([d, h]).then(function(a) {
        if (!this.c && !this.s) return se(this, b, c, f, g, e, a[1])
      }.bind(a)).then(function() {
        this.c || this.s || (b.fa = !1, b.cb = !1, ie(this, b, 0), te(this, g))
      }.bind(a))["catch"](function(a) {
        this.c || this.s || (b.fa = !1, 1001 == a.code || 1002 == a.code || 1003 == a.code ? "text" == b.type && this.h.ignoreTextStreamFailures && 1001 == a.code ? delete this.b.text :
          (this.j(a), ie(this, b, 4)) : 3017 == a.code ? ue(this, b, a) : "text" == b.type && this.h.ignoreTextStreamFailures ? delete this.b.text : (b.Wa = !0, this.j(a)))
      }.bind(a))
    }

    function ue(a, b, c) {
      if (!F(a.b).some(function(a) {
          return a != b && a.cb
        })) {
        var d = Math.round(100 * a.i);
        if (20 < d) a.i -= .2;
        else if (4 < d) a.i -= .04;
        else {
          b.Wa = !0;
          a.s = !0;
          a.j(c);
          return
        }
        b.cb = !0
      }
      ie(a, b, 4)
    }

    function qe(a, b, c, d) {
      if (!b.Ma) return Promise.resolve();
      c = id(a.f, b.type, a.a.periods[c].startTime - b.stream.presentationTimeOffset);
      d = null != d ? jd(a.f, b.type, d) : Promise.resolve();
      if (!b.stream.initSegmentReference) return Promise.all([c, d]);
      a = re(a, b.stream.initSegmentReference).then(function(a) {
        if (!this.c) return fd(this.f, b.type, a, null, null)
      }.bind(a))["catch"](function(a) {
        b.Ma = !0;
        return Promise.reject(a)
      });
      return Promise.all([c, d, a])
    }

    function se(a, b, c, d, e, f, g) {
      return ve(a, b, c).then(function() {
        if (!this.c) return fd(this.f, b.type, g, f.startTime + d.startTime, f.endTime + d.startTime)
      }.bind(a)).then(function() {
        if (!this.c) return b.va = e, b.V = f, Promise.resolve()
      }.bind(a))
    }

    function ve(a, b, c) {
      var d = cd(a.f, b.type);
      if (null == d) return Promise.resolve();
      c = c - d - a.h.bufferBehind;
      return 0 >= c ? Promise.resolve() : a.f.remove(b.type, d, d + c).then(function() {}.bind(a))
    }

    function te(a, b) {
      if (!a.J && (a.J = F(a.b).every(function(a) {
          return "text" == a.type ? !0 : !a.ma && !a.aa && a.V
        }), a.J)) {
        var c = fe(a, b);
        a.g[c] || le(a, c).then(function() {
          this.v()
        }.bind(a))["catch"](C);
        for (c = 0; c < a.a.periods.length; ++c) le(a, c)["catch"](C);
        a.B && a.B()
      }
    }

    function ne(a, b) {
      if (b.Ga != fe(a, b.stream)) {
        var c = b.Ga,
          d = F(a.b);
        d.every(function(a) {
          return a.Ga == c
        }) && d.every(we) && le(a, c).then(function() {
          if (!this.c && d.every(function(a) {
              var b = fe(this, a.stream);
              return we(a) && a.Ga == c && b != c
            }.bind(this))) {
            var a = this.G(this.a.periods[c]),
              b;
            for (b in this.b)
              if (!a[b]) {
                this.j(new v(5, 5005));
                return
              }
            for (b in a)
              if (!(this.b[b] || "text" == b && this.h.ignoreTextStreamFailures)) {
                this.j(new v(5, 5005));
                return
              }
            for (b in this.b) ee(this, b, a[b], !1), ie(this, this.b[b], 0);
            this.v()
          }
        }.bind(a))["catch"](C)
      }
    }

    function we(a) {
      return !a.fa && null == a.$ && !a.ma && !a.aa
    }

    function $d(a, b) {
      for (var c = a.a.periods.length - 1; 0 < c; --c)
        if (b >= a.a.periods[c].startTime) return c;
      return 0
    }

    function fe(a, b) {
      for (var c = 0; c < a.a.periods.length; ++c)
        for (var d = a.a.periods[c], e = 0; e < d.streamSets.length; ++e)
          if (0 <= d.streamSets[e].streams.indexOf(b)) return c;
      return -1
    }

    function re(a, b) {
      var c = rc(b.a(), a.h.retryParameters);
      if (b.L || null != b.D) {
        var d = "bytes=" + b.L + "-";
        null != b.D && (d += b.D);
        c.headers.Range = d
      }
      return a.T.request(1, c).then(function(a) {
        return a.data
      })
    }

    function ge(a, b, c) {
      b.ma = !1;
      b.Qa = !1;
      b.aa = !0;
      hd(a.f, b.type).then(function() {
        if (!this.c && c) {
          var a = this.f,
            e = b.type;
          return "text" == e ? Promise.resolve() : gd(a, e, a.Yb.bind(a, e))
        }
      }.bind(a)).then(function() {
        this.c || (b.va = null, b.V = null, b.aa = !1, ie(this, b, 0))
      }.bind(a))
    }

    function ie(a, b, c) {
      b.$ = window.setTimeout(a.X.bind(a, b), 1E3 * c)
    }

    function Zd(a) {
      null != a.$ && (window.clearTimeout(a.$), a.$ = null)
    };

    function xe(a) {
      return new Promise(function(b) {
        var c = a.split(":");
        if (2 > c.length || "data" != c[0]) throw new v(1, 1004, a);
        c = c.slice(1).join(":").split(",");
        if (2 > c.length) throw new v(1, 1004, a);
        var d = c[0],
          c = window.decodeURIComponent(c.slice(1).join(",")),
          d = d.split(";"),
          e = null;
        1 < d.length && (e = d[1]);
        if ("base64" == e) c = Ra(c).buffer;
        else {
          if (e) throw new v(1, 1005, a);
          c = Ib(c)
        }
        b({
          uri: a,
          data: c,
          headers: {
            "content-type": d[0]
          }
        })
      })
    }
    m("shaka.net.DataUriPlugin", xe);
    pc.data = xe;

    function ye(a, b) {
      return new Promise(function(c, d) {
        var e = new XMLHttpRequest;
        e.open(b.method, a, !0);
        e.responseType = "arraybuffer";
        e.timeout = b.retryParameters.timeout;
        e.withCredentials = b.allowCrossSiteCredentials;
        e.onload = function(b) {
          b = b.target;
          if (200 <= b.status && 299 >= b.status && 202 != b.status) {
            var e = b.getAllResponseHeaders().split("\r\n").reduce(function(a, b) {
              var c = b.split(": ");
              a[c[0].toLowerCase()] = c.slice(1).join(": ");
              return a
            }, {});
            b.responseURL && (a = b.responseURL);
            c({
              uri: a,
              data: b.response,
              headers: e
            })
          } else {
            e =
              null;
            try {
              e = Hb(b.response)
            } catch (l) {}
            d(new v(1, 1001, a, b.status, e))
          }
        };
        e.onerror = function() {
          d(new v(1, 1002, a))
        };
        e.ontimeout = function() {
          d(new v(1, 1003, a))
        };
        for (var f in b.headers) e.setRequestHeader(f, b.headers[f]);
        e.send(b.body)
      })
    }
    m("shaka.net.HttpPlugin", ye);
    pc.http = ye;
    pc.https = ye;

    function ze() {
      this.a = null;
      this.c = [];
      this.b = {}
    }
    k = ze.prototype;
    k.init = function(a) {
      if (!window.indexedDB) return Promise.reject(new v(9, 9E3));
      var b = window.indexedDB.open("shaka_offline_db", 1),
        c = new w;
      b.onupgradeneeded = function(b) {
        b = b.target.result;
        for (var c in a) b.createObjectStore(c, {
          keyPath: a[c]
        })
      };
      b.onsuccess = function(a) {
        this.a = a.target.result;
        c.resolve()
      }.bind(this);
      b.onerror = Ae.bind(null, b, c);
      return c.then(function() {
        var b = Object.keys(a);
        return Promise.all(b.map(function(a) {
          return Be(this, a).then(function(b) {
            this.b[a] = b
          }.bind(this))
        }.bind(this)))
      }.bind(this))
    };
    k.o = function() {
      return Promise.all(this.c.map(function(a) {
        try {
          a.transaction.abort()
        } catch (b) {}
        return a.I["catch"](C)
      })).then(function() {
        this.a && (this.a.close(), this.a = null)
      }.bind(this))
    };
    k.get = function(a, b) {
      return Ce(this, a, "readonly", function(a) {
        return a.get(b)
      })
    };
    k.forEach = function(a, b) {
      return Ce(this, a, "readonly", function(a) {
        return a.openCursor()
      }, function(a) {
        a && (b(a.value), a["continue"]())
      })
    };

    function De(a, b, c) {
      return Ce(a, b, "readwrite", function(a) {
        return a.put(c)
      })
    }
    k.remove = function(a, b) {
      return Ce(this, a, "readwrite", function(a) {
        return a["delete"](b)
      })
    };

    function Ee(a, b) {
      var c = [];
      return Ce(a, "segment", "readwrite", function(a) {
        return a.openCursor()
      }, function(a) {
        if (a) {
          if (b(a.value)) {
            var d = a["delete"](),
              f = new w;
            d.onsuccess = f.resolve;
            d.onerror = Ae.bind(null, d, f);
            c.push(f)
          }
          a["continue"]()
        }
      }).then(function() {
        return Promise.all(c)
      }).then(function() {
        return c.length
      })
    }

    function Be(a, b) {
      var c = 0;
      return Ce(a, b, "readonly", function(a) {
        return a.openCursor(null, "prev")
      }, function(a) {
        a && (c = a.key + 1)
      }).then(function() {
        return c
      })
    }

    function Ce(a, b, c, d, e) {
      c = a.a.transaction([b], c);
      var f = d(c.objectStore(b)),
        g = new w;
      e && (f.onsuccess = function(a) {
        e(a.target.result)
      });
      f.onerror = Ae.bind(null, f, g);
      var h = {
        transaction: c,
        I: g
      };
      a.c.push(h);
      var l = function() {
        this.c.splice(this.c.indexOf(h), 1)
      }.bind(a);
      c.oncomplete = function() {
        l();
        g.resolve(f.result)
      };
      c.onerror = function(a) {
        l();
        Ae(f, g, a)
      };
      return g
    }

    function Ae(a, b, c) {
      "AbortError" == a.error.name ? b.reject(new v(9, 9002)) : b.reject(new v(9, 9001, a.error));
      c.preventDefault()
    };
    var Fe = {
      manifest: "key",
      segment: "key"
    };

    function Ge(a) {
      return {
        offlineUri: "offline:" + a.key,
        originalManifestUri: a.originalManifestUri,
        duration: a.duration,
        size: a.size,
        tracks: a.periods[0].streams.map(function(a) {
          return {
            id: a.id,
            active: !1,
            type: a.contentType,
            bandwidth: 0,
            language: a.language,
            kind: a.kind || null,
            width: a.width,
            height: a.height,
            frameRate: a.frameRate,
            codecs: a.codecs
          }
        }),
        appMetadata: a.appMetadata
      }
    };

    function He(a, b, c) {
      this.b = {};
      this.i = c;
      this.m = a;
      this.l = b;
      this.j = this.a = null;
      this.f = this.h = this.g = this.c = 0
    }
    He.prototype.o = function() {
      var a = this.j || Promise.resolve();
      this.b = {};
      this.j = this.a = this.l = this.m = this.i = null;
      return a
    };

    function Ie(a, b, c, d, e) {
      a.b[b] = a.b[b] || [];
      a.b[b].push({
        uris: c.a(),
        L: c.L,
        D: c.D,
        mb: d,
        Ea: e
      })
    }

    function Je(a, b) {
      a.c = 0;
      a.g = 0;
      a.h = 0;
      a.f = 0;
      F(a.b).forEach(function(a) {
        a.forEach(function(a) {
          null != a.D ? this.c += a.D - a.L + 1 : this.h += a.mb
        }.bind(this))
      }.bind(a));
      a.a = b;
      a.a.size = a.c;
      var c = F(a.b).map(function(a) {
        var b = 0,
          c = function() {
            if (!this.i) return Promise.reject(new v(9, 9002));
            if (b >= a.length) return Promise.resolve();
            var d = a[b++];
            return Ke(this, d).then(c)
          }.bind(this);
        return c()
      }.bind(a));
      a.b = {};
      return a.j = Promise.all(c)
    }

    function Ke(a, b) {
      var c = rc(b.uris, a.l);
      if (b.L || null != b.D) c.headers.Range = "bytes=" + b.L + "-" + (null == b.D ? "" : b.D);
      var d;
      return a.m.request(1, c).then(function(a) {
        if (!this.a) return Promise.reject(new v(9, 9002));
        d = a.data.byteLength;
        return b.Ea(a.data)
      }.bind(a)).then(function() {
        if (!this.a) return Promise.reject(new v(9, 9002));
        null == b.D ? (this.a.size += d, this.f += b.mb) : this.g += d;
        var a = (this.g + this.f) / (this.c + this.h),
          c = Ge(this.a);
        this.i.progressCallback(c, a)
      }.bind(a))
    };

    function Le() {}
    Le.prototype.configure = function() {};
    Le.prototype.start = function(a) {
      var b = /^offline:([0-9]+)$/.exec(a);
      if (!b) return Promise.reject(new v(1, 9004, a));
      var c = Number(b[1]),
        d = new ze;
      return d.init(Fe).then(function() {
        return d.get("manifest", c)
      }).then(function(a) {
        if (!a) throw new v(9, 9003, c);
        return Me(a)
      }).then(function(a) {
        return d.o().then(function() {
          return a
        })
      }, function(a) {
        return d.o().then(function() {
          throw a;
        })
      })
    };
    Le.prototype.stop = function() {
      return Promise.resolve()
    };

    function Me(a) {
      var b = new Q(null, 0);
      b.Aa(a.duration);
      var c = a.drmInfo ? [a.drmInfo] : [];
      return {
        presentationTimeline: b,
        minBufferTime: 10,
        offlineSessionIds: a.sessionIds,
        periods: a.periods.map(function(a) {
          return {
            startTime: a.startTime,
            streamSets: a.streams.map(function(d) {
              var e = d.segments.map(function(a, b) {
                return new J(b, a.startTime, a.endTime, function() {
                  return [a.uri]
                }, 0, null)
              });
              b.Ha(a.startTime, e);
              e = new O(e);
              return {
                language: d.language,
                type: d.contentType,
                primary: d.primary,
                drmInfos: c,
                streams: [{
                  id: d.id,
                  createSegmentIndex: Promise.resolve.bind(Promise),
                  findSegmentPosition: e.find.bind(e),
                  getSegmentReference: e.get.bind(e),
                  initSegmentReference: d.initSegmentUri ? new yb(function() {
                    return [d.initSegmentUri]
                  }, 0, null) : null,
                  presentationTimeOffset: d.presentationTimeOffset,
                  mimeType: d.mimeType,
                  codecs: d.codecs,
                  bandwidth: 0,
                  width: d.width || void 0,
                  height: d.height || void 0,
                  kind: d.kind,
                  encrypted: d.encrypted,
                  keyId: d.keyId,
                  allowedByApplication: !0,
                  allowedByKeySystem: !0
                }]
              }
            })
          }
        })
      }
    }
    sc["application/x-offline-manifest"] = Le;

    function Ne(a) {
      if (/^offline:([0-9]+)$/.exec(a)) {
        var b = {
          uri: a,
          data: new ArrayBuffer(0),
          headers: {
            "content-type": "application/x-offline-manifest"
          }
        };
        return Promise.resolve(b)
      }
      if (b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) {
        var c = Number(b[1]),
          d = new ze;
        return d.init(Fe).then(function() {
          return d.get("segment", c)
        }).then(function(b) {
          return d.o().then(function() {
            if (!b) throw new v(9, 9003, c);
            return {
              uri: a,
              data: b.data,
              headers: {}
            }
          })
        })
      }
      return Promise.reject(new v(1, 9004, a))
    }
    m("shaka.offline.OfflineScheme", Ne);
    pc.offline = Ne;

    function Oe() {
      this.a = Promise.resolve();
      this.c = this.b = this.f = !1;
      this.h = new Promise(function(a) {
        this.g = a
      }.bind(this))
    }
    Oe.prototype.then = function(a) {
      this.a = this.a.then(a).then(function(a) {
        return this.c ? (this.g(), Promise.reject(this.i)) : Promise.resolve(a)
      }.bind(this));
      return this
    };

    function Pe(a) {
      a.f || (a.a = a.a.then(function(a) {
        this.b = !0;
        return Promise.resolve(a)
      }.bind(a), function(a) {
        this.b = !0;
        return Promise.reject(a)
      }.bind(a)));
      a.f = !0;
      return a.a
    }
    Oe.prototype.cancel = function(a) {
      if (this.b) return Promise.resolve();
      this.c = !0;
      this.i = a;
      return this.h
    };

    function Qe(a, b, c, d, e) {
      var f = e in d,
        g;
      for (g in b) {
        var h = e + "." + g,
          l = f ? d[e] : c[g],
          n = !!{
            ".abr.manager": !0
          }[h];
        if (f || g in a) void 0 === b[g] ? void 0 === l || f ? delete a[g] : a[g] = l : n ? a[g] = b[g] : "object" == typeof a[g] && "object" == typeof b[g] ? Qe(a[g], b[g], l, d, h) : typeof b[g] == typeof l && (a[g] = b[g])
      }
    };

    function V(a, b) {
      p.call(this);
      this.B = !1;
      this.f = a;
      this.s = null;
      this.w = new x;
      this.Ka = new q;
      this.pa = this.c = this.m = this.b = this.j = this.qa = this.G = this.h = this.g = this.i = null;
      this.Ob = 1E9;
      this.oa = [];
      this.Da = !1;
      this.sa = !0;
      this.J = this.l = null;
      this.v = {};
      this.a = Re(this);
      this.Ca = {
        width: Infinity,
        height: Infinity
      };
      this.C = [];
      this.na = this.T = this.ra = 0;
      b && b(this);
      this.i = new P(this.Tc.bind(this));
      this.qa = Se(this);
      for (var c = 0; c < this.f.textTracks.length; ++c) {
        var d = this.f.textTracks[c];
        d.mode = "disabled";
        "Shaka Player TextTrack" ==
        d.label && (this.s = d)
      }
      this.s || (this.s = this.f.addTextTrack("subtitles", "Shaka Player TextTrack"));
      this.s.mode = "hidden";
      y(this.w, this.f, "error", this.sc.bind(this))
    }
    ba(V);
    m("shaka.Player", V);
    V.prototype.o = function() {
      this.B = !0;
      var a = Promise.resolve();
      this.l && (a = this.l.cancel(new v(7, 7E3)));
      return a.then(function() {
        var a = Promise.all([this.J, Te(this), this.w ? this.w.o() : null, this.i ? this.i.o() : null]);
        this.a = this.i = this.Ka = this.w = this.s = this.f = null;
        return a
      }.bind(this))
    };
    V.prototype.destroy = V.prototype.o;
    V.version = "v2.0.6";
    var Ue = {};
    V.registerSupportPlugin = function(a, b) {
      Ue[a] = b
    };
    V.isBrowserSupported = function() {
      return !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach && !!window.MediaSource && !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration
    };
    V.probeSupport = function() {
      return Yc().then(function(a) {
        var b = uc(),
          c = bd();
        a = {
          manifest: b,
          media: c,
          drm: a
        };
        for (var d in Ue) a[d] = Ue[d]();
        return a
      })
    };
    V.prototype.load = function(a, b, c) {
      var d = this.jb(),
        e = new Oe;
      this.l = e;
      this.dispatchEvent(new t("loading"));
      return Pe(e.then(function() {
        return d
      }).then(function() {
        return vc(a, this.i, this.a.manifest.retryParameters, c)
      }.bind(this)).then(function(b) {
        this.m = new b;
        this.m.configure(this.a.manifest);
        return this.m.start(a, this.i, this.Na.bind(this), this.ha.bind(this), this.Qc.bind(this))
      }.bind(this)).then(function(b) {
        if (0 == b.periods.length) throw new v(4, 4014);
        this.c = b;
        this.pa = a;
        this.g = new Jc(this.i, this.ha.bind(this),
          this.Rc.bind(this));
        this.g.configure(this.a.drm);
        return this.g.init(b, !1)
      }.bind(this)).then(function() {
        this.c.periods.forEach(this.Na.bind(this));
        this.na = Date.now() / 1E3;
        return Promise.all([Mc(this.g, this.f), this.qa])
      }.bind(this)).then(function() {
        this.a.abr.manager.init(this.hb.bind(this));
        this.j = new Od(this.f, this.c.presentationTimeline, 1 * Math.max(this.c.minBufferTime || 0, this.a.streaming.rebufferingGoal), b || null, this.Mb.bind(this), this.Sc.bind(this));
        this.G = new ad(this.f, this.h, this.s);
        this.b = new Yd(this.j,
          this.G, this.i, this.c, this.Pc.bind(this), this.Rb.bind(this), this.ha.bind(this));
        this.b.configure(this.a.streaming);
        return this.b.init()
      }.bind(this)).then(function() {
        this.c.periods.forEach(this.Na.bind(this));
        Ve(this);
        We(this);
        this.l = null
      }.bind(this)))["catch"](function(a) {
        this.l == e && (this.l = null, this.dispatchEvent(new t("unloading")));
        return Promise.reject(a)
      }.bind(this))
    };
    V.prototype.load = V.prototype.load;

    function Se(a) {
      a.h = new MediaSource;
      var b = new w;
      y(a.w, a.h, "sourceopen", b.resolve);
      a.f.src = window.URL.createObjectURL(a.h);
      return b
    }
    V.prototype.configure = function(a) {
      a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.hb.bind(this)));
      Qe(this.a, a, Re(this), Xe(), "");
      Ye(this)
    };
    V.prototype.configure = V.prototype.configure;

    function Ye(a) {
      a.m && a.m.configure(a.a.manifest);
      a.g && a.g.configure(a.a.drm);
      if (a.b) {
        a.b.configure(a.a.streaming);
        try {
          a.c.periods.forEach(a.Na.bind(a))
        } catch (b) {
          a.ha(b)
        }
        Ze(a, be(a.b))
      }
      a.a.abr.enabled && !a.sa ? a.a.abr.manager.enable() : a.a.abr.manager.disable();
      a.a.abr.manager.setDefaultEstimate(a.a.abr.defaultBandwidthEstimate)
    }
    V.prototype.getConfiguration = function() {
      var a = Re(this);
      Qe(a, this.a, Re(this), Xe(), "");
      return a
    };
    V.prototype.getConfiguration = V.prototype.getConfiguration;
    V.prototype.Ic = function() {
      var a = Re(this);
      a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.hb.bind(this)));
      this.a = Re(this);
      Ye(this)
    };
    V.prototype.resetConfiguration = V.prototype.Ic;
    V.prototype.rb = function() {
      return this.i
    };
    V.prototype.getNetworkingEngine = V.prototype.rb;
    V.prototype.Zb = function() {
      return this.pa
    };
    V.prototype.getManifestUri = V.prototype.Zb;
    V.prototype.R = function() {
      return this.c ? this.c.presentationTimeline.R() : !1
    };
    V.prototype.isLive = V.prototype.R;
    V.prototype.ea = function() {
      return this.c ? this.c.presentationTimeline.ea() : !1
    };
    V.prototype.isInProgress = V.prototype.ea;
    V.prototype.Kc = function() {
      var a = 0,
        b = 0;
      this.c && (b = this.c.presentationTimeline, a = b.ua(), b = b.Ua());
      return {
        start: a,
        end: b
      }
    };
    V.prototype.seekRange = V.prototype.Kc;
    V.prototype.keySystem = function() {
      return this.g ? this.g.keySystem() : ""
    };
    V.prototype.keySystem = V.prototype.keySystem;
    V.prototype.drmInfo = function() {
      return this.g ? this.g.b : null
    };
    V.prototype.drmInfo = V.prototype.drmInfo;
    V.prototype.cc = function() {
      return this.Da
    };
    V.prototype.isBuffering = V.prototype.cc;
    V.prototype.jb = function() {
      if (this.B) return Promise.resolve();
      this.dispatchEvent(new t("unloading"));
      var a = Promise.resolve();
      this.l && (a = new v(7, 7E3), a = this.l.cancel(a));
      return a.then(function() {
        this.J || (this.J = $e(this).then(function() {
          this.J = null
        }.bind(this)));
        return this.J
      }.bind(this))
    };
    V.prototype.unload = V.prototype.jb;
    V.prototype.Ta = function() {
      return this.j ? this.j.Ta() : 0
    };
    V.prototype.getPlaybackRate = V.prototype.Ta;
    V.prototype.dd = function(a) {
      this.j && Vd(this.j, a)
    };
    V.prototype.trickPlay = V.prototype.dd;
    V.prototype.Sb = function() {
      this.j && Vd(this.j, 1)
    };
    V.prototype.cancelTrickPlay = V.prototype.Sb;
    V.prototype.getTracks = function() {
      if (!this.b) return [];
      var a = ce(this.b);
      return qd(be(this.b), a).filter(function(a) {
        return 0 > this.oa.indexOf(a.id)
      }.bind(this))
    };
    V.prototype.getTracks = V.prototype.getTracks;
    V.prototype.Lc = function(a, b) {
      if (this.b) {
        var c = rd(be(this.b), a);
        if (c) {
          var d = c.stream;
          d.allowedByApplication && d.allowedByKeySystem && (this.C.push({
            timestamp: Date.now() / 1E3,
            id: d.id,
            type: a.type,
            fromAdaptation: !1
          }), c = {}, c[a.type] = d, "text" != a.type && (d = ce(this.b).text, this.configure({
            abr: {
              enabled: !1
            }
          }), d && (c.text = d)), af(this, c, b))
        }
      }
    };
    V.prototype.selectTrack = V.prototype.Lc;
    V.prototype.fc = function() {
      return "showing" == this.s.mode
    };
    V.prototype.isTextTrackVisible = V.prototype.fc;
    V.prototype.Nc = function(a) {
      this.s.mode = a ? "showing" : "hidden";
      bf(this)
    };
    V.prototype.setTextTrackVisibility = V.prototype.Nc;
    V.prototype.getStats = function() {
      cf(this);
      var a = {},
        b = {},
        c = this.f && this.f.getVideoPlaybackQuality ? this.f.getVideoPlaybackQuality() : {};
      this.b && (b = ce(this.b), a = b.video || {}, b = b.audio || {});
      return {
        width: a.width || 0,
        height: a.height || 0,
        streamBandwidth: a.bandwidth + b.bandwidth || 0,
        decodedFrames: Number(c.totalVideoFrames),
        droppedFrames: Number(c.droppedVideoFrames),
        estimatedBandwidth: this.a.abr.manager.getBandwidthEstimate(),
        playTime: this.ra,
        bufferingTime: this.T,
        switchHistory: this.C.slice(0)
      }
    };
    V.prototype.getStats = V.prototype.getStats;
    V.prototype.addTextTrack = function(a, b, c, d, e) {
      if (!this.b) return Promise.reject();
      for (var f = be(this.b), g, h = 0; h < this.c.periods.length; h++)
        if (this.c.periods[h] == f) {
          if (h == this.c.periods.length - 1) {
            if (g = this.c.presentationTimeline.da() - f.startTime, Infinity == g) return Promise.reject()
          } else g = this.c.periods[h + 1].startTime - f.startTime;
          break
        }
      var l = {
        id: this.Ob++,
        createSegmentIndex: Promise.resolve.bind(Promise),
        findSegmentPosition: function() {
          return 1
        },
        getSegmentReference: function(b) {
          return 1 != b ? null : new J(1, 0,
            g,
            function() {
              return [a]
            }, 0, null)
        },
        initSegmentReference: null,
        presentationTimeOffset: 0,
        mimeType: d,
        codecs: e || "",
        bandwidth: 0,
        kind: c,
        encrypted: !1,
        keyId: null,
        language: b,
        allowedByApplication: !0,
        allowedByKeySystem: !0
      };
      d = {
        language: b,
        type: "text",
        primary: !1,
        drmInfos: [],
        streams: [l]
      };
      this.oa.push(l.id);
      f.streamSets.push(d);
      return de(this.b, l).then(function() {
        if (!this.B) return this.oa.splice(this.oa.indexOf(l.id), 1), Ze(this, f), Ve(this), {
          id: l.id,
          active: !1,
          type: "text",
          bandwidth: 0,
          language: b,
          kind: c,
          width: null,
          height: null
        }
      }.bind(this))
    };
    V.prototype.addTextTrack = V.prototype.addTextTrack;
    V.prototype.fb = function(a, b) {
      this.Ca.width = a;
      this.Ca.height = b
    };
    V.prototype.setMaxHardwareResolution = V.prototype.fb;

    function Te(a) {
      a.w && a.w.ka(a.h, "sourceopen");
      a.f && (a.f.removeAttribute("src"), a.f.load());
      var b = Promise.all([a.a ? a.a.abr.manager.stop() : null, a.g ? a.g.o() : null, a.G ? a.G.o() : null, a.j ? a.j.o() : null, a.b ? a.b.o() : null, a.m ? a.m.stop() : null]);
      a.g = null;
      a.G = null;
      a.j = null;
      a.b = null;
      a.m = null;
      a.c = null;
      a.pa = null;
      a.qa = null;
      a.h = null;
      a.v = {};
      a.C = [];
      a.ra = 0;
      a.T = 0;
      return b
    }

    function $e(a) {
      return a.m ? Te(a).then(function() {
        this.B || (this.Mb(!1), this.qa = Se(this))
      }.bind(a)) : Promise.resolve()
    }

    function Xe() {
      return {
        ".drm.servers": "",
        ".drm.clearKeys": "",
        ".drm.advanced": {
          distinctiveIdentifierRequired: !1,
          persistentStateRequired: !1,
          videoRobustness: "",
          audioRobustness: "",
          serverCertificate: null
        }
      }
    }

    function Re(a) {
      return {
        drm: {
          retryParameters: qc(),
          servers: {},
          clearKeys: {},
          advanced: {}
        },
        manifest: {
          retryParameters: qc(),
          dash: {
            customScheme: function(a) {
              if (a) return null
            },
            clockSyncUri: ""
          }
        },
        streaming: {
          retryParameters: qc(),
          rebufferingGoal: 2,
          bufferingGoal: 10,
          bufferBehind: 30,
          ignoreTextStreamFailures: !1,
          useRelativeCueTimestamps: !1
        },
        abr: {
          manager: a.Ka,
          enabled: !0,
          defaultBandwidthEstimate: 5E5
        },
        preferredAudioLanguage: "",
        preferredTextLanguage: "",
        restrictions: {
          minWidth: 0,
          maxWidth: Infinity,
          minHeight: 0,
          maxHeight: Infinity,
          minPixels: 0,
          maxPixels: Infinity,
          minAudioBandwidth: 0,
          maxAudioBandwidth: Infinity,
          minVideoBandwidth: 0,
          maxVideoBandwidth: Infinity
        }
      }
    }
    k = V.prototype;
    k.Na = function(a) {
      var b = this.b ? ce(this.b) : {};
      od(this.g, b, a);
      b = a.streamSets.some(sd);
      nd(a, this.a.restrictions, this.Ca) && !this.l && Ve(this);
      a = !a.streamSets.some(sd);
      if (!b) throw new v(4, 4011);
      if (a) throw new v(4, 4012);
    };

    function af(a, b, c) {
      for (var d in b) {
        var e = b[d],
          f = c || !1;
        "text" == d && (f = !0);
        a.sa ? a.v[d] = {
          stream: e,
          Vb: f
        } : ee(a.b, d, e, f)
      }
    }

    function cf(a) {
      if (a.c) {
        var b = Date.now() / 1E3;
        a.Da ? a.T += b - a.na : a.ra += b - a.na;
        a.na = b
      }
    }
    k.Tc = function(a, b, c) {
      this.a.abr.manager.segmentDownloaded(a, b, c)
    };
    k.Mb = function(a) {
      cf(this);
      this.Da = a;
      this.dispatchEvent(new t("buffering", {
        buffering: a
      }))
    };
    k.Sc = function() {
      this.b && he(this.b)
    };

    function df(a, b, c) {
      if (!F(b).some(sd)) return a.ha(new v(4, 4012)), {};
      var d = {};
      if (c)["video", "audio", "text"].forEach(function(a) {
        a in b && (d[a] = b[a])
      });
      else {
        c = ce(a.b);
        for (var e in c) {
          var f = c[e];
          f.allowedByApplication && f.allowedByKeySystem && b[e].language == f.language || (d[e] = b[e])
        }
      }
      if (Na(d)) return {};
      ha(Object.keys(d));
      var g = a.a.abr.manager.chooseStreams(d);
      return Pa(d, function(a) {
        return !!g[a]
      }) ? g : (a.ha(new v(4, 4012)), {})
    }

    function Ze(a, b) {
      var c = {
          audio: !1,
          text: !1
        },
        d = td(b, a.a, c),
        e = df(a, d),
        f;
      for (f in e) a.C.push({
        timestamp: Date.now() / 1E3,
        id: e[f].id,
        type: f,
        fromAdaptation: !0
      });
      af(a, e, !0);
      We(a);
      d.text && d.audio && c.text && d.text.language != d.audio.language && (a.s.mode = "showing", bf(a))
    }
    k.Pc = function(a) {
      this.sa = !0;
      this.a.abr.manager.disable();
      a = td(a, this.a);
      a = df(this, a, !0);
      for (var b in this.v) a[b] = this.v[b].stream;
      this.v = {};
      for (b in a) this.C.push({
        timestamp: Date.now() / 1E3,
        id: a[b].id,
        type: b,
        fromAdaptation: !0
      });
      this.l || Ve(this);
      return a
    };
    k.Rb = function() {
      this.sa = !1;
      this.a.abr.enabled && this.a.abr.manager.enable();
      for (var a in this.v) {
        var b = this.v[a];
        ee(this.b, a, b.stream, b.Vb)
      }
      this.v = {}
    };
    k.hb = function(a, b) {
      var c = ce(this.b),
        d;
      for (d in a) {
        var e = a[d];
        c[d] != e ? this.C.push({
          timestamp: Date.now() / 1E3,
          id: e.id,
          type: d,
          fromAdaptation: !0
        }) : delete a[d]
      }
      if (!Na(a) && this.b) {
        for (d in a) ee(this.b, d, a[d], b || !1);
        We(this)
      }
    };

    function We(a) {
      Promise.resolve().then(function() {
        this.B || this.dispatchEvent(new t("adaptation"))
      }.bind(a))
    }

    function Ve(a) {
      Promise.resolve().then(function() {
        this.B || this.dispatchEvent(new t("trackschanged"))
      }.bind(a))
    }

    function bf(a) {
      a.dispatchEvent(new t("texttrackvisibility"))
    }
    k.ha = function(a) {
      this.dispatchEvent(new t("error", {
        detail: a
      }))
    };
    k.Qc = function(a) {
      this.dispatchEvent(a)
    };
    k.sc = function() {
      if (this.f.error) {
        var a = this.f.error.code;
        if (1 != a) {
          var b = this.f.error.msExtendedCode;
          b && (0 > b && (b += Math.pow(2, 32)), b = b.toString(16));
          this.ha(new v(3, 3016, a, b))
        }
      }
    };
    k.Rc = function(a) {
      var b = ["output-restricted", "internal-error"],
        c = be(this.b),
        d = !1;
      c.streamSets.forEach(function(c) {
        c.streams.forEach(function(c) {
          var e = c.allowedByKeySystem;
          c.keyId && c.keyId in a && (c.allowedByKeySystem = 0 > b.indexOf(a[c.keyId]));
          e != c.allowedByKeySystem && (d = !0)
        })
      });
      Ze(this, c);
      d && Ve(this)
    };

    function W(a) {
      this.a = new ze;
      this.c = a;
      this.j = ef(this);
      this.h = null;
      this.v = !1;
      this.i = null;
      this.l = [];
      this.f = -1;
      this.m = 0;
      this.b = null;
      this.g = new He(a.i, a.getConfiguration().streaming.retryParameters, this.j)
    }
    m("shaka.offline.Storage", W);

    function ff() {
      return !!window.indexedDB
    }
    W.support = ff;
    W.prototype.o = function() {
      var a = this.l,
        b = this.a,
        c = this.g ? this.g.o()["catch"](function() {}).then(function() {
          return Promise.all(a.map(function(a) {
            return b.remove("segment", a)
          }))
        }).then(function() {
          return b.o()
        }) : Promise.resolve();
      this.j = this.c = this.g = this.a = null;
      return c
    };
    W.prototype.destroy = W.prototype.o;
    W.prototype.configure = function(a) {
      Qe(this.j, a, ef(this), {}, "")
    };
    W.prototype.configure = W.prototype.configure;
    W.prototype.$c = function(a, b, c) {
      function d(a) {
        f = a
      }
      if (this.v) return Promise.reject(new v(9, 9006));
      this.v = !0;
      var e, f = null;
      return gf(this).then(function() {
        Y(this);
        return hf(this, a, d, c)
      }.bind(this)).then(function(c) {
        Y(this);
        this.b = c.manifest;
        this.h = c.Wb;
        if (this.b.presentationTimeline.R() || this.b.presentationTimeline.ea()) throw new v(9, 9005, a);
        this.b.periods.forEach(this.s.bind(this));
        this.f = this.a.b.manifest++;
        this.m = 0;
        c = this.b.periods.map(this.w.bind(this));
        var d = this.h.b,
          f = Rc(this.h);
        if (d) {
          if (!f.length) throw new v(9,
            9007, a);
          d.initData = []
        }
        e = {
          key: this.f,
          originalManifestUri: a,
          duration: this.m,
          size: 0,
          periods: c,
          sessionIds: f,
          drmInfo: d,
          appMetadata: b
        };
        return Je(this.g, e)
      }.bind(this)).then(function() {
        Y(this);
        if (f) throw f;
        return De(this.a, "manifest", e)
      }.bind(this)).then(function() {
        return jf(this)
      }.bind(this)).then(function() {
        return Ge(e)
      }.bind(this))["catch"](function(a) {
        return jf(this)["catch"](C).then(function() {
          throw a;
        })
      }.bind(this))
    };
    W.prototype.store = W.prototype.$c;
    W.prototype.remove = function(a) {
      function b(a) {
        6013 != a.code && (e = a)
      }
      var c = a.offlineUri,
        d = /^offline:([0-9]+)$/.exec(c);
      if (!d) return Promise.reject(new v(9, 9004, c));
      var e = null,
        f, g, h = Number(d[1]);
      return gf(this).then(function() {
        Y(this);
        return this.a.get("manifest", h)
      }.bind(this)).then(function(a) {
        Y(this);
        if (!a) throw new v(9, 9003, c);
        f = a;
        a = Me(f);
        g = new Jc(this.c.i, b, function() {});
        g.configure(this.c.getConfiguration().drm);
        return g.init(a, !0)
      }.bind(this)).then(function() {
        return Oc(g, f.sessionIds)
      }.bind(this)).then(function() {
        return g.o()
      }.bind(this)).then(function() {
        Y(this);
        if (e) throw e;
        var b = f.periods.map(function(a) {
            return a.streams.map(function(a) {
              var b = a.segments.map(function(a) {
                a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.uri);
                return Number(a[1])
              });
              a.initSegmentUri && (a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.initSegmentUri), b.push(Number(a[1])));
              return b
            }).reduce(B, [])
          }).reduce(B, []),
          c = 0,
          d = b.length,
          g = this.j.progressCallback;
        return Ee(this.a, function(e) {
          e = b.indexOf(e.key);
          0 <= e && (g(a, c / d), c++);
          return 0 <= e
        }.bind(this))
      }.bind(this)).then(function() {
        Y(this);
        this.j.progressCallback(a,
          1);
        return this.a.remove("manifest", h)
      }.bind(this))
    };
    W.prototype.remove = W.prototype.remove;
    W.prototype.list = function() {
      var a = [];
      return gf(this).then(function() {
        Y(this);
        return this.a.forEach("manifest", function(b) {
          a.push(Ge(b))
        })
      }.bind(this)).then(function() {
        return a
      })
    };
    W.prototype.list = W.prototype.list;

    function hf(a, b, c, d) {
      function e() {}
      var f = a.c.i,
        g = a.c.getConfiguration(),
        h, l, n;
      return vc(b, f, g.manifest.retryParameters, d).then(function(a) {
        Y(this);
        n = new a;
        n.configure(g.manifest);
        return n.start(b, f, this.s.bind(this), c)
      }.bind(a)).then(function(a) {
        Y(this);
        h = a;
        l = new Jc(f, c, e);
        l.configure(g.drm);
        return l.init(h, !0)
      }.bind(a)).then(function() {
        Y(this);
        return kf(h)
      }.bind(a)).then(function() {
        Y(this);
        return Nc(l)
      }.bind(a)).then(function() {
        Y(this);
        return n.stop()
      }.bind(a)).then(function() {
        Y(this);
        return {
          manifest: h,
          Wb: l
        }
      }.bind(a))["catch"](function(a) {
        if (n) return n.stop().then(function() {
          throw a;
        });
        throw a;
      })
    }
    W.prototype.B = function(a) {
      var b = [],
        c = a.filter(function(a) {
          return "video" == a.type && 480 >= a.height
        });
      c.sort(function(a, b) {
        return b.bandwidth - a.bandwidth
      });
      c.length && b.push(c[0]);
      for (var d = Ec(this.c.getConfiguration().preferredAudioLanguage), c = [0, Cc, Dc], e = a.filter(function(a) {
          return "audio" == a.type
        }), c = c.map(function(a) {
          return e.filter(function(b) {
            b = Ec(b.language);
            return Bc(a, d, b)
          })
        }), f = e, g = 0; g < c.length; g++) c[g].length && (f = c[g]);
      f.sort(function(a, b) {
        return a.bandwidth - b.bandwidth
      });
      f.length && b.push(f[Math.floor(f.length /
        2)]);
      var c = Ec(this.c.getConfiguration().preferredTextLanguage),
        h = Bc.bind(null, Dc, c);
      b.push.apply(b, a.filter(function(a) {
        var b = Ec(a.language);
        return "text" == a.type && h(b)
      }));
      return b
    };

    function ef(a) {
      return {
        trackSelectionCallback: a.B.bind(a),
        progressCallback: function(a, c) {
          if (a || c) return null
        }
      }
    }

    function gf(a) {
      return a.a.a ? Promise.resolve() : a.a.init(Fe)
    }
    W.prototype.s = function(a) {
      function b(a, b, c) {
        b = b.filter(function(a) {
          return a.type == c
        });
        return 0 == b.length ? null : rd(a, b[0]).stream
      }
      var c = {};
      this.i && (c = {
        video: b(this.b.periods[0], this.i, "video"),
        audio: b(this.b.periods[0], this.i, "audio")
      });
      od(this.h, c, a);
      nd(a, this.c.getConfiguration().restrictions, {
        width: Infinity,
        height: Infinity
      })
    };

    function jf(a) {
      var b = a.h ? a.h.o() : Promise.resolve();
      a.h = null;
      a.b = null;
      a.v = !1;
      a.i = null;
      a.l = [];
      a.f = -1;
      return b
    }

    function kf(a) {
      a = a.periods.map(function(a) {
        return a.streamSets
      }).reduce(B, []).map(function(a) {
        return a.streams
      }).reduce(B, []);
      return Promise.all(a.map(function(a) {
        return a.createSegmentIndex()
      }))
    }
    W.prototype.w = function(a) {
      var b = qd(a, null),
        b = this.j.trackSelectionCallback(b);
      this.i || (this.i = b, this.b.periods.forEach(this.s.bind(this)));
      for (var c = b.length - 1; 0 < c; --c) {
        for (var d = !1, e = c - 1; 0 <= e; --e)
          if (b[c].type == b[e].type && b[c].kind == b[e].kind && b[c].language == b[e].language) {
            d = !0;
            break
          }
        if (d) break
      }
      b = b.map(function(b) {
        b = rd(a, b);
        return lf(this, a, b.ad, b.stream)
      }.bind(this));
      return {
        startTime: a.startTime,
        streams: b
      }
    };

    function lf(a, b, c, d) {
      for (var e = [], f = a.b.presentationTimeline.ta(), g = f, h = d.findSegmentPosition(f), l = null != h ? d.getSegmentReference(h) : null; l;) {
        var n = a.a.b.segment++;
        Ie(a.g, c.type, l, (l.endTime - l.startTime) * d.bandwidth / 8, function(a, b, c, d) {
          b = {
            key: a,
            data: d,
            manifestKey: this.f,
            streamNumber: c,
            segmentNumber: b
          };
          this.l.push(a);
          return De(this.a, "segment", b)
        }.bind(a, n, l.position, d.id));
        e.push({
          startTime: l.startTime,
          endTime: l.endTime,
          uri: "offline:" + a.f + "/" + d.id + "/" + n
        });
        g = l.endTime + b.startTime;
        l = d.getSegmentReference(++h)
      }
      a.m =
        Math.max(a.m, g - f);
      b = null;
      d.initSegmentReference && (n = a.a.b.segment++, b = "offline:" + a.f + "/" + d.id + "/" + n, Ie(a.g, c.type, d.initSegmentReference, 0, function(a, b) {
        var c = {
          key: n,
          data: b,
          manifestKey: this.f,
          streamNumber: a,
          segmentNumber: -1
        };
        this.l.push(n);
        return De(this.a, "segment", c)
      }.bind(a, d.id)));
      return {
        id: d.id,
        primary: c.primary,
        presentationTimeOffset: d.presentationTimeOffset || 0,
        contentType: c.type,
        mimeType: d.mimeType,
        codecs: d.codecs,
        frameRate: d.frameRate,
        kind: d.kind,
        language: c.language,
        width: d.width || null,
        height: d.height ||
          null,
        initSegmentUri: b,
        encrypted: d.encrypted,
        keyId: d.keyId,
        segments: e
      }
    }

    function Y(a) {
      if (!a.c) throw new v(9, 9002);
    }
    Ue.offline = ff;
    m("shaka.polyfill.installAll", function() {
      for (var a = 0; a < mf.length; ++a) mf[a]()
    });
    var mf = [];

    function nf(a) {
      mf.push(a)
    }
    m("shaka.polyfill.register", nf);

    function of (a) {
      var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
        b = new Event(b, a);
      a.target.dispatchEvent(b)
    }
    nf(function() {
      if (window.Document) {
        var a = Element.prototype;
        a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
        a = Document.prototype;
        a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen;
        "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
          get: function() {
            return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
          }
        }), Object.defineProperty(document,
          "fullscreenEnabled", {
            get: function() {
              return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.a
            }
          }));
        document.addEventListener("webkitfullscreenchange", of );
        document.addEventListener("webkitfullscreenerror", of );
        document.addEventListener("mozfullscreenchange", of );
        document.addEventListener("mozfullscreenerror", of );
        document.addEventListener("MSFullscreenChange", of );
        document.addEventListener("MSFullscreenError", of )
      }
    });
    nf(function() {
      var a = navigator.userAgent;
      a && 0 <= a.indexOf("CrKey") && delete window.indexedDB
    });

    function pf(a) {
      this.c = [];
      this.b = [];
      this.a = [];
      for (a = new Jb(new DataView(a.buffer)); Lb(a);) {
        var b = Sb(1886614376, a);
        if (-1 == b) break;
        var c = a.a - 8,
          d = Mb(a);
        if (1 < d) N(a, b - (a.a - c));
        else {
          N(a, 3);
          var e = Ta(Qb(a, 16)),
            f = [];
          if (0 < d)
            for (var d = M(a), g = 0; g < d; ++g) {
              var h = Ta(Qb(a, 16));
              f.push(h)
            }
          d = M(a);
          N(a, d);
          this.b.push.apply(this.b, f);
          this.c.push(e);
          this.a.push({
            start: c,
            end: a.a - 1
          });
          a.a != c + b && N(a, b - (a.a - c))
        }
      }
    };

    function qf(a, b) {
      try {
        var c = new rf(a, b);
        return Promise.resolve(c)
      } catch (d) {
        return Promise.reject(d)
      }
    }

    function rf(a, b) {
      this.keySystem = a;
      for (var c = !1, d = 0; d < b.length; ++d) {
        var e = b[d],
          f = {
            audioCapabilities: [],
            videoCapabilities: [],
            persistentState: "optional",
            distinctiveIdentifier: "optional",
            initDataTypes: e.initDataTypes,
            sessionTypes: ["temporary"],
            label: e.label
          },
          g = !1;
        if (e.audioCapabilities)
          for (var h = 0; h < e.audioCapabilities.length; ++h) {
            var l = e.audioCapabilities[h];
            if (l.contentType) {
              var g = !0,
                n = l.contentType.split(";")[0];
              MSMediaKeys.isTypeSupported(this.keySystem, n) && (f.audioCapabilities.push(l), c = !0)
            }
          }
        if (e.videoCapabilities)
          for (h =
            0; h < e.videoCapabilities.length; ++h) l = e.videoCapabilities[h], l.contentType && (g = !0, n = l.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, n) && (f.videoCapabilities.push(l), c = !0));
        g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
        "required" == e.persistentState && (f.persistentState = "required", f.sessionTypes = ["persistent-license"]);
        if (c) {
          this.a = f;
          return
        }
      }
      c = Error("Unsupported keySystem");
      c.name = "NotSupportedError";
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    }
    rf.prototype.createMediaKeys = function() {
      var a = new sf(this.keySystem);
      return Promise.resolve(a)
    };
    rf.prototype.getConfiguration = function() {
      return this.a
    };

    function tf(a) {
      var b = this.mediaKeys;
      b && b != a && uf(b, null);
      delete this.mediaKeys;
      return (this.mediaKeys = a) ? uf(a, this) : Promise.resolve()
    }

    function sf(a) {
      this.a = new MSMediaKeys(a);
      this.b = new x
    }
    sf.prototype.createSession = function(a) {
      if ("temporary" != (a || "temporary")) throw new TypeError("Session type " + a + " is unsupported on this platform.");
      return new vf(this.a)
    };
    sf.prototype.setServerCertificate = function() {
      return Promise.reject(Error("setServerCertificate not supported on this platform."))
    };

    function uf(a, b) {
      function c() {
        b.msSetMediaKeys(d.a);
        b.removeEventListener("loadedmetadata", c)
      }
      Ca(a.b);
      if (!b) return Promise.resolve();
      y(a.b, b, "msneedkey", wf);
      var d = a;
      try {
        return 1 <= b.readyState ? b.msSetMediaKeys(a.a) : b.addEventListener("loadedmetadata", c), Promise.resolve()
      } catch (e) {
        return Promise.reject(e)
      }
    }

    function vf(a) {
      p.call(this);
      this.c = null;
      this.g = a;
      this.b = this.a = null;
      this.f = new x;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new w;
      this.keyStatuses = new xf
    }
    ba(vf);
    k = vf.prototype;
    k.generateRequest = function(a, b) {
      this.a = new w;
      try {
        this.c = this.g.createSession("video/mp4", new Uint8Array(b), null), y(this.f, this.c, "mskeymessage", this.oc.bind(this)), y(this.f, this.c, "mskeyadded", this.mc.bind(this)), y(this.f, this.c, "mskeyerror", this.nc.bind(this)), yf(this, "status-pending")
      } catch (c) {
        this.a.reject(c)
      }
      return this.a
    };
    k.load = function() {
      return Promise.reject(Error("MediaKeySession.load not yet supported"))
    };
    k.update = function(a) {
      this.b = new w;
      try {
        this.c.update(new Uint8Array(a))
      } catch (b) {
        this.b.reject(b)
      }
      return this.b
    };
    k.close = function() {
      try {
        this.c.close(), this.closed.resolve(), Ca(this.f)
      } catch (a) {
        this.closed.reject(a)
      }
      return this.closed
    };
    k.remove = function() {
      return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
    };

    function wf(a) {
      var b = document.createEvent("CustomEvent");
      b.initCustomEvent("encrypted", !1, !1, null);
      b.initDataType = "cenc";
      if (a = a.initData) {
        var c = new pf(a);
        if (!(1 >= c.a.length)) {
          for (var d = [], e = 0; e < c.a.length; e++) d.push(a.subarray(c.a[e].start, c.a[e].end + 1));
          e = zf;
          a = [];
          for (c = 0; c < d.length; ++c) {
            for (var f = !1, g = 0; g < a.length && !(f = e ? e(d[c], a[g]) : d[c] === a[g]); ++g);
            f || a.push(d[c])
          }
          for (e = d = 0; e < a.length; e++) d += a[e].length;
          d = new Uint8Array(d);
          for (e = c = 0; e < a.length; e++) d.set(a[e], c), c += a[e].length;
          a = d
        }
      }
      b.initData =
        a;
      this.dispatchEvent(b)
    }

    function zf(a, b) {
      return Ua(a, b)
    }
    k.oc = function(a) {
      this.a && (this.a.resolve(), this.a = null);
      this.dispatchEvent(new t("message", {
        messageType: void 0 == this.keyStatuses.Va() ? "licenserequest" : "licenserenewal",
        message: a.message.buffer
      }))
    };
    k.mc = function() {
      this.a ? (yf(this, "usable"), this.a.resolve(), this.a = null) : this.b && (yf(this, "usable"), this.b.resolve(), this.b = null)
    };
    k.nc = function() {
      var a = Error("EME PatchedMediaKeysMs key error");
      a.errorCode = this.c.error;
      if (this.a) this.a.reject(a), this.a = null;
      else if (this.b) this.b.reject(a), this.b = null;
      else switch (this.c.error.code) {
        case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
        case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
          yf(this, "output-not-allowed");
        default:
          yf(this, "internal-error")
      }
    };

    function yf(a, b) {
      a.keyStatuses.gb(b);
      a.dispatchEvent(new t("keystatuseschange"))
    }

    function xf() {
      this.size = 0;
      this.a = void 0
    }
    var Af;
    k = xf.prototype;
    k.gb = function(a) {
      this.size = void 0 == a ? 0 : 1;
      this.a = a
    };
    k.Va = function() {
      return this.a
    };
    k.forEach = function(a) {
      this.a && a(this.a, Af)
    };
    k.get = function(a) {
      if (this.has(a)) return this.a
    };
    k.has = function(a) {
      var b = Af;
      return this.a && Ua(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
    };
    k.keys = function() {};

    function Bf() {
      return Promise.reject(Error("The key system specified is not supported."))
    }

    function Cf(a) {
      return a ? Promise.reject(Error("MediaKeys not supported.")) : Promise.resolve()
    }

    function Df() {
      throw new TypeError("Illegal constructor.");
    }
    Df.prototype.createSession = function() {};
    Df.prototype.setServerCertificate = function() {};

    function Ef() {
      throw new TypeError("Illegal constructor.");
    }
    Ef.prototype.getConfiguration = function() {};
    Ef.prototype.createMediaKeys = function() {};
    var Ff = "";

    function Gf(a) {
      Ff = a;
      Hf = (new Uint8Array([0])).buffer;
      navigator.requestMediaKeySystemAccess = If;
      delete HTMLMediaElement.prototype.mediaKeys;
      HTMLMediaElement.prototype.mediaKeys = null;
      HTMLMediaElement.prototype.setMediaKeys = Jf;
      window.MediaKeys = Kf;
      window.MediaKeySystemAccess = Lf
    }

    function Mf(a) {
      var b = Ff;
      return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a
    }

    function If(a, b) {
      try {
        var c = new Lf(a, b);
        return Promise.resolve(c)
      } catch (d) {
        return Promise.reject(d)
      }
    }

    function Jf(a) {
      var b = this.mediaKeys;
      b && b != a && Nf(b, null);
      delete this.mediaKeys;
      (this.mediaKeys = a) && Nf(a, this);
      return Promise.resolve()
    }

    function Lf(a, b) {
      this.a = this.keySystem = a;
      var c = !0;
      "org.w3.clearkey" == a && (this.a = "webkit-org.w3.clearkey", c = !1);
      var d = !1,
        e;
      e = document.getElementsByTagName("video");
      e = e.length ? e[0] : document.createElement("video");
      for (var f = 0; f < b.length; ++f) {
        var g = b[f],
          h = {
            audioCapabilities: [],
            videoCapabilities: [],
            persistentState: "optional",
            distinctiveIdentifier: "optional",
            initDataTypes: g.initDataTypes,
            sessionTypes: ["temporary"],
            label: g.label
          },
          l = !1;
        if (g.audioCapabilities)
          for (var n = 0; n < g.audioCapabilities.length; ++n) {
            var r =
              g.audioCapabilities[n];
            if (r.contentType) {
              var l = !0,
                u = r.contentType.split(";")[0];
              e.canPlayType(u, this.a) && (h.audioCapabilities.push(r), d = !0)
            }
          }
        if (g.videoCapabilities)
          for (n = 0; n < g.videoCapabilities.length; ++n) r = g.videoCapabilities[n], r.contentType && (l = !0, e.canPlayType(r.contentType, this.a) && (h.videoCapabilities.push(r), d = !0));
        l || (d = e.canPlayType("video/mp4", this.a) || e.canPlayType("video/webm", this.a));
        "required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) :
          d = !1);
        if (d) {
          this.b = h;
          return
        }
      }
      c = "Unsupported keySystem";
      if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
      c = Error(c);
      c.name = "NotSupportedError";
      c.code = DOMException.NOT_SUPPORTED_ERR;
      throw c;
    }
    Lf.prototype.createMediaKeys = function() {
      var a = new Kf(this.a);
      return Promise.resolve(a)
    };
    Lf.prototype.getConfiguration = function() {
      return this.b
    };

    function Kf(a) {
      this.h = a;
      this.b = null;
      this.a = new x;
      this.c = [];
      this.f = {}
    }

    function Nf(a, b) {
      a.b = b;
      Ca(a.a);
      var c = Ff;
      b && (y(a.a, b, c + "needkey", a.xc.bind(a)), y(a.a, b, c + "keymessage", a.wc.bind(a)), y(a.a, b, c + "keyadded", a.uc.bind(a)), y(a.a, b, c + "keyerror", a.vc.bind(a)))
    }
    k = Kf.prototype;
    k.createSession = function(a) {
      var b = a || "temporary";
      if ("temporary" != b && "persistent-license" != b) throw new TypeError("Session type " + a + " is unsupported on this platform.");
      a = this.b || document.createElement("video");
      a.src || (a.src = "about:blank");
      b = new Of(a, this.h, b);
      this.c.push(b);
      return b
    };
    k.setServerCertificate = function() {
      return Promise.reject(Error("setServerCertificate not supported on this platform."))
    };
    k.xc = function(a) {
      var b = document.createEvent("CustomEvent");
      b.initCustomEvent("encrypted", !1, !1, null);
      b.initDataType = "webm";
      b.initData = a.initData;
      this.b.dispatchEvent(b)
    };
    k.wc = function(a) {
      var b = Pf(this, a.sessionId);
      b && (a = new t("message", {
        messageType: void 0 == b.keyStatuses.Va() ? "licenserequest" : "licenserenewal",
        message: a.message
      }), b.b && (b.b.resolve(), b.b = null), b.dispatchEvent(a))
    };
    k.uc = function(a) {
      if (a = Pf(this, a.sessionId)) Qf(a, "usable"), a.a && a.a.resolve(), a.a = null
    };
    k.vc = function(a) {
      var b = Pf(this, a.sessionId);
      if (b) {
        var c = Error("EME v0.1b key error");
        c.errorCode = a.errorCode;
        c.errorCode.systemCode = a.systemCode;
        !a.sessionId && b.b ? (c.method = "generateRequest", 45 == a.systemCode && (c.message = "Unsupported session type."), b.b.reject(c), b.b = null) : a.sessionId && b.a ? (c.method = "update", b.a.reject(c), b.a = null) : (c = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? Qf(b, "output-restricted") : 1 == c ? Qf(b, "expired") : Qf(b, "internal-error"))
      }
    };

    function Pf(a, b) {
      var c = a.f[b];
      return c ? c : (c = a.c.shift()) ? (c.sessionId = b, a.f[b] = c) : null
    }

    function Of(a, b, c) {
      p.call(this);
      this.f = a;
      this.i = !1;
      this.a = this.b = null;
      this.c = b;
      this.g = c;
      this.sessionId = "";
      this.expiration = NaN;
      this.closed = new w;
      this.keyStatuses = new Rf
    }
    ba(Of);

    function Sf(a, b, c) {
      if (a.i) return Promise.reject(Error("The session is already initialized."));
      a.i = !0;
      var d;
      try {
        if ("persistent-license" == a.g)
          if (c) d = new Uint8Array(Ib("LOAD_SESSION|" + c));
          else {
            var e = Ib("PERSISTENT|"),
              f = new Uint8Array(e.byteLength + b.byteLength);
            f.set(new Uint8Array(e), 0);
            f.set(new Uint8Array(b), e.byteLength);
            d = f
          }
        else d = new Uint8Array(b)
      } catch (h) {
        return Promise.reject(h)
      }
      a.b = new w;
      var g = Mf("generateKeyRequest");
      try {
        a.f[g](a.c, d)
      } catch (h) {
        if ("InvalidStateError" != h.name) return a.b = null,
          Promise.reject(h);
        setTimeout(function() {
          try {
            this.f[g](this.c, d)
          } catch (l) {
            this.b.reject(l), this.b = null
          }
        }.bind(a), 10)
      }
      return a.b
    }
    k = Of.prototype;
    k.ib = function(a, b) {
      if (this.a) this.a.then(this.ib.bind(this, a, b))["catch"](this.ib.bind(this, a, b));
      else {
        this.a = a;
        var c, d;
        "webkit-org.w3.clearkey" == this.c ? (c = Eb(b), d = JSON.parse(c), "oct" != d.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null), c = Ra(d.keys[0].k), d = Ra(d.keys[0].kid)) : (c = new Uint8Array(b), d = null);
        var e = Mf("addKey");
        try {
          this.f[e](this.c, c, d, this.sessionId)
        } catch (f) {
          this.a.reject(f), this.a = null
        }
      }
    };

    function Qf(a, b) {
      a.keyStatuses.gb(b);
      a.dispatchEvent(new t("keystatuseschange"))
    }
    k.generateRequest = function(a, b) {
      return Sf(this, b, null)
    };
    k.load = function(a) {
      return "persistent-license" == this.g ? Sf(this, null, a) : Promise.reject(Error("Not a persistent session."))
    };
    k.update = function(a) {
      var b = new w;
      this.ib(b, a);
      return b
    };
    k.close = function() {
      if ("persistent-license" != this.g) {
        if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
        var a = Mf("cancelKeyRequest");
        try {
          this.f[a](this.c, this.sessionId)
        } catch (b) {}
      }
      this.closed.resolve();
      return this.closed
    };
    k.remove = function() {
      return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close()
    };

    function Rf() {
      this.size = 0;
      this.a = void 0
    }
    var Hf;
    k = Rf.prototype;
    k.gb = function(a) {
      this.size = void 0 == a ? 0 : 1;
      this.a = a
    };
    k.Va = function() {
      return this.a
    };
    k.forEach = function(a) {
      this.a && a(this.a, Hf)
    };
    k.get = function(a) {
      if (this.has(a)) return this.a
    };
    k.has = function(a) {
      var b = Hf;
      return this.a && Ua(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1
    };
    k.keys = function() {};
    nf(function() {
      !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? Gf("webkit") : HTMLMediaElement.prototype.generateKeyRequest ? Gf("") : window.MSMediaKeys ? (Af = (new Uint8Array([0])).buffer, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = tf, window.MediaKeys = sf, window.MediaKeySystemAccess = rf, navigator.requestMediaKeySystemAccess =
        qf) : (navigator.requestMediaKeySystemAccess = Bf, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Cf, window.MediaKeys = Df, window.MediaKeySystemAccess = Ef))
    });

    function Tf() {
      var a = MediaSource.prototype.addSourceBuffer;
      MediaSource.prototype.addSourceBuffer = function() {
        var b = a.apply(this, arguments);
        b.abort = function() {};
        return b
      }
    }

    function Uf() {
      var a = MediaSource.prototype.endOfStream;
      MediaSource.prototype.endOfStream = function() {
        for (var b = 0, d = 0; d < this.sourceBuffers.length; ++d) var e = this.sourceBuffers[d],
          e = e.buffered.end(e.buffered.length - 1),
          b = Math.max(b, e);
        if (!isNaN(this.duration) && b < this.duration)
          for (this.sb = !0, d = 0; d < this.sourceBuffers.length; ++d) e = this.sourceBuffers[d], e.ob = !1;
        return a.apply(this, arguments)
      };
      var b = MediaSource.prototype.addSourceBuffer;
      MediaSource.prototype.addSourceBuffer = function() {
        var a = b.apply(this, arguments);
        a.h = this;
        a.addEventListener("updateend", Vf, !1);
        this.a || (this.addEventListener("sourceclose", Wf, !1), this.a = !0);
        return a
      }
    }

    function Vf(a) {
      var b = a.target,
        c = b.h;
      if (c.sb) {
        a.preventDefault();
        a.stopPropagation();
        a.stopImmediatePropagation();
        b.ob = !0;
        for (a = 0; a < c.sourceBuffers.length; ++a)
          if (0 == c.sourceBuffers[a].ob) return;
        c.sb = !1
      }
    }

    function Wf(a) {
      a = a.target;
      for (var b = 0; b < a.sourceBuffers.length; ++b) a.sourceBuffers[b].removeEventListener("updateend", Vf, !1);
      a.removeEventListener("sourceclose", Wf, !1)
    }
    nf(function() {
      if (window.MediaSource) {
        var a = navigator.vendor,
          b = navigator.appVersion;
        !a || !b || 0 > a.indexOf("Apple") || (0 <= b.indexOf("Version/8") ? window.MediaSource = null : 0 <= b.indexOf("Version/9") ? Tf() : 0 <= b.indexOf("Version/10") && (Tf(), Uf()))
      }
    });

    function Z(a) {
      this.c = [];
      this.b = [];
      this.ja = Xf;
      if (a) try {
        a(this.W.bind(this), this.a.bind(this))
      } catch (b) {
        this.a(b)
      }
    }
    var Xf = 0;

    function Yf(a) {
      var b = new Z;
      b.W(void 0);
      return b.then(function() {
        return a
      })
    }

    function Zf(a) {
      var b = new Z;
      b.a(a);
      return b
    }

    function $f(a) {
      function b(a, b, c) {
        a.ja == Xf && (e[b] = c, d++, d == e.length && a.W(e))
      }
      var c = new Z;
      if (!a.length) return c.W([]), c;
      for (var d = 0, e = Array(a.length), f = c.a.bind(c), g = 0; g < a.length; ++g) a[g] && a[g].then ? a[g].then(b.bind(null, c, g), f) : b(c, g, a[g]);
      return c
    }

    function ag(a) {
      for (var b = new Z, c = b.W.bind(b), d = b.a.bind(b), e = 0; e < a.length; ++e) a[e] && a[e].then ? a[e].then(c, d) : c(a[e]);
      return b
    }
    Z.prototype.then = function(a, b) {
      var c = new Z;
      switch (this.ja) {
        case 1:
          bg(this, c, a);
          break;
        case 2:
          bg(this, c, b);
          break;
        case Xf:
          this.c.push({
            I: c,
            Ea: a
          }), this.b.push({
            I: c,
            Ea: b
          })
      }
      return c
    };
    Z.prototype["catch"] = function(a) {
      return this.then(void 0, a)
    };
    Z.prototype.W = function(a) {
      if (this.ja == Xf) {
        this.Pa = a;
        this.ja = 1;
        for (a = 0; a < this.c.length; ++a) bg(this, this.c[a].I, this.c[a].Ea);
        this.c = [];
        this.b = []
      }
    };
    Z.prototype.a = function(a) {
      if (this.ja == Xf) {
        this.Pa = a;
        this.ja = 2;
        for (a = 0; a < this.b.length; ++a) bg(this, this.b[a].I, this.b[a].Ea);
        this.c = [];
        this.b = []
      }
    };

    function bg(a, b, c) {
      cg.push(function() {
        if (c && "function" == typeof c) {
          try {
            var a = c(this.Pa)
          } catch (f) {
            b.a(f);
            return
          }
          var e;
          try {
            e = a && a.then
          } catch (f) {
            b.a(f);
            return
          }
          a instanceof Z ? a == b ? b.a(new TypeError("Chaining cycle detected")) : a.then(b.W.bind(b), b.a.bind(b)) : e ? dg(a, e, b) : b.W(a)
        } else 1 == this.ja ? b.W(this.Pa) : b.a(this.Pa)
      }.bind(a));
      null == eg && (eg = fg(gg))
    }

    function dg(a, b, c) {
      try {
        var d = !1;
        b.call(a, function(a) {
          if (!d) {
            d = !0;
            var b;
            try {
              b = a && a.then
            } catch (g) {
              c.a(g);
              return
            }
            b ? dg(a, b, c) : c.W(a)
          }
        }, c.a.bind(c))
      } catch (e) {
        c.a(e)
      }
    }

    function gg() {
      for (; cg.length;) {
        null != eg && (hg(eg), eg = null);
        var a = cg;
        cg = [];
        for (var b = 0; b < a.length; ++b) a[b]()
      }
    }

    function fg() {
      return 0
    }

    function hg() {}
    var eg = null,
      cg = [];
    nf(function(a) {
      window.setImmediate ? (fg = function(a) {
        return window.setImmediate(a)
      }, hg = function(a) {
        return window.clearImmediate(a)
      }) : (fg = function(a) {
        return window.setTimeout(a, 0)
      }, hg = function(a) {
        return window.clearTimeout(a)
      });
      if (!window.Promise || a) window.Promise = Z, window.Promise.resolve = Yf, window.Promise.reject = Zf, window.Promise.all = $f, window.Promise.race = ag, window.Promise.prototype.then = Z.prototype.then, window.Promise.prototype["catch"] = Z.prototype["catch"]
    });

    function ig() {
      return {
        droppedVideoFrames: this.webkitDroppedFrameCount,
        totalVideoFrames: this.webkitDecodedFrameCount,
        corruptedVideoFrames: 0,
        creationTime: NaN,
        totalFrameDelay: 0
      }
    }
    nf(function() {
      if (window.HTMLVideoElement) {
        var a = HTMLVideoElement.prototype;
        !a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = ig)
      }
    });

    function jg(a, b, c) {
      return new window.TextTrackCue(a, b, c)
    }

    function kg(a, b, c) {
      return new window.TextTrackCue(a + "-" + b + "-" + c, a, b, c)
    }
    nf(function() {
      if (!window.VTTCue && window.TextTrackCue) {
        var a = TextTrackCue.length;
        if (3 == a) window.VTTCue = jg;
        else if (6 == a) window.VTTCue = kg;
        else {
          var b;
          try {
            b = !!jg(1, 2, "")
          } catch (c) {
            b = !1
          }
          b && (window.VTTCue = jg)
        }
      }
    });
  }.call(g, this));
  if (typeof(module) != "undefined" && module.exports) module.exports = g.shaka;
  else if (typeof(define) != "undefined" && define.amd) define(function() {
    return g.shaka
  });
  else this.shaka = g.shaka;
})();