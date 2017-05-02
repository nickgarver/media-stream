//--              Server Side              --//


var http = require('http')
var fs = require('fs')
// var dashjs = require("dashjs")
var MP4Box = require('mp4box')
var express = require("express");
var app     = express();
var path    = require("path");
var ffmpeg = require('ffmpeg');

	try {
		var process = new ffmpeg('media/uwf.mp4');
		process.then(function (video) {
			console.log('The video is ready to be processed');
				video
					.setVideoSize('720x?', true, true, 'black')
					.setVideoFormat('mp4')
					.setWatermark('media/logosmall.png')
					.save('outputFiles/outsmall.mp4', function (error, file) {
						console.log('Video saving...')
					if (!error){
						console.log('Saved! New video file: ' + file);
					}
					else{
						console.log('Could not save video' + error)
					}
					});

		}, function (err) {
			console.log('Error: ' + err);
		});
	} catch (e) {
		console.log(e.code);
		console.log(e.msg);
	}
// 	}
// // path to my video file
// var infs = fs.createReadStream('./uwf.mp4');
// infs.on('error', function(err) {
//   console.log("u messed up");
// });

// var proc = new ffmpeg({ source: infs, nolog: true })
//   .setFfmpegPath("ffmpeg"); //Set the path to where FFmpeg is installed
//   proc
//   .saveToFile('./outputFiles');





app.use(express.static(__dirname + '/serverStuff'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/serverStuff/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.listen(3000);
console.log("Running at Port 3000");

//TODO
// make 3 different video resolutions (low, sd, hd) for shaka to read in with ffmpeg
// install shaka packager
// make a mpd(bufferArray) from the 3 different resolutions i created with ffmpeg
// give dash the buffer
// present to web page
//figure out how to manage uploads and file management things


//dependancies
//ffmpeg
//libmp3lame / libx264
//


//404 Response
function send404Response(response){
	response.writeHead(404,{"Context-TYPE": "text/plain"});
	response.write("Error 404 Page not found");
	response.end();
}
