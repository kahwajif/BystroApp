var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// create express application
var app = express();

// server configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// import routes
var routes = require('./routes');
app.use('/', routes);

// static directory
app.use(express.static('dist'));

module.exports = app;
