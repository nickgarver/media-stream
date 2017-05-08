// myapp.js

var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

function initPlayer() {
  // Create a Player instance.
  var video = document.getElementById('video');
  var player = new shaka.Player(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  player.load(manifestUri).then(function() {
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  }).catch(onError);  // onError is executed if the asynchronous load fails.
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

document.addEventListener('DOMContentLoaded', initApp);


// myapp.js
// var mp4box = new MP4Box();
// var shakaPlayer = require("shaka-player")
//
// require.config({
//   paths: {
//     shakaPlayer: 'shaka-player.compiled.js'
//   }
// });

//
// require(['/libs/shaka-player.js'], function (shakaPlayer) {
//     //foo is now loaded.
// });
//
// var manifestList = ['//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd','http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd','../media/Bristle.mp4'];
//
// function initApp() {
//   // Install built-in polyfills to patch browser incompatibilities.
//   shaka.polyfill.installAll();
//
//   // Check to see if the browser supports the basic APIs Shaka needs.
//   if (shaka.Player.isBrowserSupported()) {
//     // Everything looks good!
//     initPlayer();
//   } else {
//     // This browser does not have the minimum set of APIs we need.
//     console.error('Browser not supported!');
//   }
// }
//
// function initPlayer() {
//   // Create a shaka Player instance.
//   var video = document.getElementById('video');
//   var player = new shaka.Player(video);
//
//   // Attach player to the window to make it easy to access in the JS console.
//   window.player = player;
//
//   // Listen for error events.
//   player.addEventListener('error', onErrorEvent);
//
//   // Try to load a manifest.
//   // This is an asynchronous process.
//   player.load(manifestList[1]).then(function() {
//     // This runs if the asynchronous load is successful.
//     console.log('The video has now been loaded!');
//   }).catch(onError);  // onError is executed if the asynchronous load fails.
// }
//
// function onErrorEvent(event) {
//   // Extract the shaka.util.Error object from the event.
//   onError(event.detail);
// }
//
// function onError(error) {
//   // Log the error.
//   console.error('Error code', error.code, 'object', error);
// }
//
// document.addEventListener('DOMContentLoaded', initApp);
