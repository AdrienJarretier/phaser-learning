var express = require("express");
var app = express();
var http = require("http").Server(app);

app.get('/', function(req, res){

	res.sendFile(__dirname + '/index.html');

});

app.use( express.static('games') );

// app.use('/hellophaser', express.static('hellophaser'));
// app.use('/phaser_tutorial_02', express.static('phaser_tutorial_02'));
// app.use('/Ride-on_Platforms', express.static('Ride-on_Platforms'));
// app.use('/phaser.min.js', express.static('phaser.min.js'));

http.listen(80, function(){
  console.log('listening on *:80');
});
