var express = require('express');
var mongo = require('../mongo/mongo');
var router = express.Router();

/* GET Toutes les données complètes, ne doit être disponible qu'en dev */
router.get('/', function(req, res, next) {
  // Renvoie tous les données de la base
  //mongo.GetAllData(req, res);
  res.send('CompleteDatas');
});

/* GET Toutes les données complètes publique */
router.get('/public', function(req, res, next) {
  // Renvoie tous les données de la base
  //mongo.GetAllData(req, res);
  res.send('CompleteDatas Public');
});

/* GET Toutes les données complètes publique */
router.get('/public/:id', function(req, res, next) {
  // Renvoie tous les données de la base
  //mongo.GetAllData(req, res);
  res.send('CompleteDatas Public sur un id' + req.params.id);
});

module.exports = router;