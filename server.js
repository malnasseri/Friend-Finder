// Dependencies
// requiring our packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// requiring data from friends object from the js file
var friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 4000; // Sets an initial port


app.use(express.static('./app/public'));

// data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

console.log('App listening on PORT ' + PORT);

app.listen(process.env.PORT || 4000);

