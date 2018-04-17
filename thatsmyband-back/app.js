var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userdataRouter = require('./routes/userdata');

var facebookapi = require('./facebookapi');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, UserId, UserToken");
  next();
});

// Récupèration du token et de l'id de l'utilisateur dans les headers de la requête
app.use(function(req, res, next) {
    console.log("Request UserId : " + req.get("UserId"));
    console.log("Request UserToken : " + req.get("UserToken"));
    // On vérifie que le token est bien le bon pour l'id en appelant l'API Facebook (sinon on renvoie un forbidden)
    //facebookapi.GetUserId(req.get("UserToken"));

    next();
  });

// Routing
app.use('/', indexRouter);
app.use('/userdata', userdataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error : ' + err.message);
});

module.exports = app;
