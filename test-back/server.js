// Declarations des dépendances
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var httpError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// Demarrage du serveur
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, UserId, UserToken");
  next();
});

// Declaration des routes
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Gestion des erreurs applicatives
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error : ' + err.message);
});

// On écoute sur le port 3000
app.listen('3000');

module.exports = app;


