// Dependencies
// requiring our packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// requiring data from friends object from the js file
var friends = require('./surveyData.js');

var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port


app.use(express.static(__dirname + '/'));

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require('./apiRoutes.js')(app);
require('./htmlRoutes.js')(app);

console.log('App listening on PORT ' + PORT);

app.listen(process.env.PORT || 4000);

