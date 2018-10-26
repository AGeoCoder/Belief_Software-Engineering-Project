var express = require('express');
var app = express();
var morgan = require('morgan');
// mongodb driver
var mongoose = require('mongoose');
// local host port
var port = process.env.PORT || 8080;
// allows for user data to be parsed and input into new user
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// give front end access to everything in public folder
app.use(express.static(__dirname + '/public'));
// backend routes will have /api appended before them in url
app.use('/api', appRoutes);

// connects to mongodb
mongoose.connect('mongodb://localhost:27017/tutorial', { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log('Did not connect to database: ' + err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});
mongoose.set('useCreateIndex', true);

// default route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// server port
app.listen(port, function() {
  console.log('Server is running on port: ' + port);
});
