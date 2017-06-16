var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use( bodyParser.json() );  
app.use(bodyParser.urlencoded({ extended: true }));


// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});




app.post('/hello', function (req, res, next) {
  //var d = JSON.stringify(req);
  var c = req.body.challenge; //req.body.challenge;
  //console.log("c: "+c);
  var botPayload = {
    challenge : c
  };

  // Loop otherwise..
  //if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  //} else {
  //  return res.status(200).end();
  //}
});





app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});