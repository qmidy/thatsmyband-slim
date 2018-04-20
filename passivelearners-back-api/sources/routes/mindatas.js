var express = require('express');
var mongo = require('../mongo/mongo');
var router = express.Router();

/* GET Toutes les données minimisées, ne doit être disponible qu'en dev */
router.get('/', function(req, res, next) {
  // Renvoie tous les données de la base, minimisées ensuite
  //mongo.GetAllTheMindata(req, res);
  res.send('Mindatas');
});

/* GET Toutes les données complètes publique */
router.get('/public', function(req, res, next) {
  // Renvoie tous les données de la base
  //mongo.GetAllData(req, res);
  res.send('Mindatas Public');
});

/* GET Toutes les données complètes publique */
router.get('/public/:id', function(req, res, next) {
  // Renvoie tous les données de la base
  //mongo.GetAllData(req, res);
  res.send('Mindatas Public sur un id' + req.params.id);
});

module.exports = router;