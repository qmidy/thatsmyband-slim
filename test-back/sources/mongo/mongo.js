// Declarations des dépendances
const mongoose = require('mongoose'); 
const user = require('../model/user');
var config = require('../config/config');

// Configuration de la base
const dburl = config.DbUrl;
const dboptions = config.DbOptions;

const db = null;

exports.Init = function() {
	// Connexion à la base
	mongoose.connect(dburl, dboptions);

	this.db = mongoose.connection; 
	this.db.on('error', console.error.bind(console, 'Erreur lors de la connexion à la base')); 
	this.db.once('open', function (){
	    console.log("Connexion à la base OK"); 
	}); 
}

exports.GetUsers = function(req, res) {
	// On renvoie tous les users de la base
	user.model.find(function(err, users) {
		if(err) {
			res.send(err);
		}
		res.json(users);
	});
}

exports.CreateUser = function(req, res) {
	// On insère un user en base
	var userToCreate = new user.model();

	userToCreate.name = req.body.name;

	// On enregistre la valeur crée
	userToCreate.save(function(err) {
		if(err) {
			res.send(err);
		}
		res.send({message: 'User créé en base'});
	});
}

