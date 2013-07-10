#!/usr/bin/env node

var express = require('express');
var fs = require('fs');

var app = express(express.logger());

var html_string = fs.readFileSync("index.html", "UTF-8");

app.get('/', function(request, response) {
  response.send(html_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
