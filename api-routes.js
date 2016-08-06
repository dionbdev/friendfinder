var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var reservations = [{
	routeName: "john_doe",
	name: "John Doe",
	number: "555 123 4567",
	email: "myemail123@gmail.com",
	uniqueId: "johnD"

},{
	routeName: "jane_doe",
	name: "Jane Doe",
	number: "555 987 6543",
	email: "myemail88@gmail.com",
	uniqueId: "janeD"

},{
	routeName: "helga_pataki",
	name: "Helga Pataki",
	number: "555 246 8101",
	email: "ilovefootballhead90@gmail.com",
	uniqueId: "helgy"
}];

var waitList = [];

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'hotrestaurant.html'));
});

app.get('/tables', function(request, response) {
	response.sendFile(path.join(__dirname, 'table.html'));
});
app.get('/reserve', function(request, response) {
	response.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', function (request, response) {
	response.status(201).json(reservations);
})

app.post('/api/reserve', function(req, res){
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