// Declarations
require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookie = require('cookie')
var cookieParser = require('cookie-parser')
var acceptOverride = require('connect-acceptoverride')

// var jwt = require('express-jwt')
// var slugify = require('slugify')
// var moment = require('moment')

// SEQUELIZE
const Sequelize = require('sequelize');
const sequelize = new Sequelize('soniccook_dev', 'postgres', null, { dialect: 'postgres' });
const sync = () => {
  return sequelize.sync({ force: true })
}

// ALLOW CORS
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
require('./controllers/recipes.js')(app);
require('./controllers/ingredients.js')(app);
require('./controllers/search.js')(app);

// SERVER
var port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log('SonicCook listening on port 8000!');
  sync()
    .then(() => console.log('... and Database synced!'))
    .catch( e => console.log(e))
});
