// Declarations
require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookie = require('cookie')
var cookieParser = require('cookie-parser')
var acceptOverride = require('connect-acceptoverride')
var mongoose = require('mongoose')

//Set up default mongoose connection
var mongoDB =  (process.env.NODE_ENV === 'production') ? process.env.MONGODB_URI : 'mongodb://localhost/my_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var jwt = require('express-jwt')
// var slugify = require('slugify')
// var moment = require('moment')

// ALLOW CORS
const whitelist = (process.env.NODE_ENV === 'production') ? "https://www.missionconsultants.io" : "*"
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
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
