// myapp.js
// var mp4box = new MP4Box();
//var shakaPlayer = require("shaka-player")

// require.config({
//   paths: {
//     shakaPlayer: 'packages/shaka-player.min',
//     ffmpeg: 'packages/ffmpeg'
//   }
// });


// require(['../../libs/shaka-player.js'], function (shakaPlayer) {
//     //foo is now loaded.
// });


// try {
//   new ffmpeg('media/uwf.mp4', function (err, video) {
//     if (!err) {
//       console.log('The video is ready to be processed');
//     } else {
//       console.log('Error: ' + err);
//     }
//   });
// } catch (e) {
//   console.log(e.code);
//   console.log(e.msg);
// }



//create multiple transcodings/resolutions of the mp4 video
//ffmpeg -codec:a libvo_aacenc -ar 44100 -ac 1 -codec:v libx264 -profile:v baseline -level 13 -b:v 2000k output.mp4 -i test.mp4


//segment different transcodings/resolutions to dash manifests
//MP4Box -dash [DURATION] -rap -frag-rap -profile [PROFILE] -out [path/to/outpout.file] [path/to/input1.file] [path/to/input2.file] [path/to/input3.file]

// var manifestList = ['//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd','http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd','../media/Bristle.mp4'];

// function initApp() {
//   // Install built-in polyfills to patch browser incompatibilities.
//   shaka.polyfill.installAll();

//   // Check to see if the browser supports the basic APIs Shaka needs.
//   if (shaka.Player.isBrowserSupported()) {
//     // Everything looks good!
//     initPlayer();
//   } else {
//     // This browser does not have the minimum set of APIs we need.
//     console.error('Browser not supported!');
//   }
// }

// function initPlayer() {
//   // Create a shaka Player instance.
//   var video = document.getElementById('video');
//   var player = new shaka.Player(video);

//   // Attach player to the window to make it easy to access in the JS console.
//   window.player = player;

//   // Listen for error events.
//   player.addEventListener('error', onErrorEvent);

//   // Try to load a manifest.
//   // This is an asynchronous process.
//   player.load(manifestList[1]).then(function() {
//     // This runs if the asynchronous load is successful.
//     console.log('The video has now been loaded!');
//   }).catch(onError);  // onError is executed if the asynchronous load fails.
// }

// function onErrorEvent(event) {
//   // Extract the shaka.util.Error object from the event.
//   onError(event.detail);
// }

// function onError(error) {
//   // Log the error.
//   console.error('Error code', error.code, 'object', error);
// }

// document.addEventListener('DOMContentLoaded', initApp);