var express = require("express");
var app = express();
var http = require("http").Server(app);

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

app.use('/hellophaser', express.static('hellophaser'));

http.listen(80, function(){
  console.log('listening on *:80');
});
