var express = require("express");
var app = express();
var http = require("http").Server(app);

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

app.use('/hellophaser', express.static('hellophaser'));
app.use('/phaser_tutorial_02', express.static('phaser_tutorial_02'));

http.listen(80, function(){
  console.log('listening on *:80');
});
