var express = require('express');
var ParseServer = require('parse-server').ParseServer;

// Configure the Parse API
var api = new ParseServer({
  databaseURI: 'mongodb://',
  cloud: __dirname + '/cloud/main.js',
  appId: '1234',
  masterKey: '5678',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse'
});

var app = express();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

// Listen for connections on port 1337
var port =  1337;
app.listen(port, function() {
    console.log('parse-server-mealtrack running on port ' + port + '.');
});