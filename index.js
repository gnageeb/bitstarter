var express = require('express')
var app = express();
var fs = require('fs');
app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  buf = fs.readFileSync('index.html');
  mystring = buf.toString();
  
  response.send('myString');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
