var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 8080))

app.get('/', function(request, response) {
var buffer = fs.readFileSync('index.html');  
response.send(buffer.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
