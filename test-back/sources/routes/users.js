var express = require('express');
var mongo = require('../mongo/mongo');
var router = express.Router();

/* GET users */
router.get('/', function(req, res, next) {
  // Renvoie les users de la base
  mongo.GetUsers(req, res);
});

/* POST users */
router.post('/', function(req, res, next) {
	// Cree un user en base de données
	mongo.CreateUser(req, res);
});

module.exports = router;