var express = require('express');
var mongo = require('../mongo/mongo');
var router = express.Router();

/* GET Tous les overall, ne doit être disponible qu'en dev */
router.get('/', function(req, res, next) {
  // Renvoie tous les overalls de la base
  //mongo.GetAllTheOverall(req, res);
  res.send('Overalls');
});

/* GET Tous les overall public */
router.get('/public', function(req, res, next) {
  // Renvoie tous les overalls de la base
  //mongo.GetAllTheOverall(req, res);
  res.send('Overalls Public');
});

/* GET Tous les overall public */
router.get('/public/:id', function(req, res, next) {
  // Renvoie tous les overalls de la base
  //mongo.GetAllTheOverall(req, res);
  res.send('Overalls Public sur un id' + req.params.id);
});

module.exports = router;