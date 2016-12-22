var express = require('express');
var app = express();
var ip = require("ip");
var opn = require("opn");
var exec = require("child-exec");
var fs = require("fs");

var livereload = require('livereload');

var livereloadScript = "<script>document.write('<script src=\"http:\/\/' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>";


app.get("/", function(req, res) {
	var content = fs.readFileSync("./src/index.html", "utf-8");
	content = content.replace("</body>", livereloadScript + "</body>")
	res.end(content);
})


app.use(express.static(__dirname + '/'));



var server = livereload.createServer({});
var files = [
	'/src/**/*'
];
server.watch(files.map(function (item){
	return __dirname + item;
}))


var myIp = ip.address();
var port = 4100;
var url = "http://" + myIp + ":" + port;

var server = app.listen(port, function() {
	console.log("app listening at: " + url);
});






opn(url);


exec("gulp watch");

// exec("gulp watch");