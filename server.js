'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
  res.status(404).send('Page not found!');
});

app.get('/secret', function(req, res) {
  res.status(200).send('This message is secret!');
});

app.listen(process.env.PORT || 5000, function() {
  console.log('server running');
});
