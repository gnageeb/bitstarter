
//var express = require('express');
var fs = require('fs');
//var app = express.createServer();
var INDEX = "index.html";

var express = require('express')
  , http = require('http');

var app = express(); 
var server = http.createServer(app);

app.get('/', function(request, response) {
   var buffer = fs.readFileSync(INDEX); 
   response.setHeader('Content-Type','text/html');
   response.setHeader('Content-Length',buffer.length);
   response.send(buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

