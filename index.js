var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  res.send('<h5>Server: ' + req.hostname + '</h5>')
});

http.listen(80, function(){
  console.log('listening on 80');
});
