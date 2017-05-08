//--              Server Side              --//


var http = require('http')
var fs = require('fs')
var dashjs = require("dashjs")
var MP4Box = require('mp4box')
var express = require("express");
var app     = express();
var path    = require("path");
var ffmpeg = require('ffmpeg');




app.use(express.static(__dirname + '/clientStuff'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/clientStuff/index.html'));
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
