// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// Data
var comments = [];