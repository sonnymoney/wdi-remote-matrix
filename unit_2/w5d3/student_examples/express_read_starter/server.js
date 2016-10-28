// DEPENDENCIES
var express = require('express');
var app = express();

// PORT
var port = 3000;

// ROUTES
app.get('/', function(req, res) {
  res.send('Welcome!');
});

// LISTENER
app.listen(port, function() {
  console.log("App is running on port: ", port);
});
