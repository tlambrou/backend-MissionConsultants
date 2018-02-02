// Declarations
require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookie = require('cookie')
var cookieParser = require('cookie-parser')
var acceptOverride = require('connect-acceptoverride')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/missionconsultants')

// var jwt = require('express-jwt')
// var slugify = require('slugify')
// var moment = require('moment')

// ALLOW CORS
const whitelist = (process.env.NODE_ENV === 'production') ? "www.missionconsultants.io" : "*"
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', whitelist);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

// Middleware
app.use(express.static('public'))
app.use(acceptOverride())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);
app.use(function (req, res, next) {
  var format = req.query.format
  if (format) { req.headers.accept = 'application/' + format }
  next();
});

//ROUTES
//===========
require('./controllers/contractors.js')(app);
require('./controllers/inquiries.js')(app);


// SERVER
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('Mission Consultants (Server) listening on port 8000!');
});
