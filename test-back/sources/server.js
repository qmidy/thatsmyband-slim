// Declarations des dépendances
var express = require('express');
var passport = require('passport');
var httpError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var mongo = require('./mongo/mongo');
var config = require('./config/config');

// Connexion à la base de donnée
mongo.Init();

// Demarrage du serveur
var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin);
  res.header("Access-Control-Allow-Headers", config.AccessControlAllowHeaders);
  next();
});

// Declaration des routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Gestion des erreurs applicatives
app.use(function(req, res, next) {
  next(httpError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error : ' + err.message);
});

// On écoute sur le port configuré
app.listen(config.ServerPort);

module.exports = app;


