var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



var waitList = [];

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'home.html'));
});



app.post('/api-routes', function(req, res){
	var newReso = req.body;

	console.log(newReso);

	function checkReso (){
		if (reservations.length < 6) {
				reservations.push(newReso);
				res.json(reservations);
		} else{
			waitList.push(newReso);
			res.json(reservations);
		}
	};
	checkReso();
});


app.listen(PORT, function() {
	console.log('listening on port ' + PORT);
});