var express = require('express');
var app = express();
var morgan = require('morgan');
// mongodb driver
var mongoose = require('mongoose');
var User = require('./app/models/user');
// local host port
var port = process.env.PORT || 8080;
// allows for user data to be parsed and input into new user
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// connects to mongodb
mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log('Did not connect to database: ' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});
mongoose.set('useCreateIndex', true);

// server port
app.listen(port, function() {
  console.log('Server is running on port: ' + port);
});
