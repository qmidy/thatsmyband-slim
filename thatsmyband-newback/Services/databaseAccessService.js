const mongoose = require('mongoose');
var User = require('../Datamodel/user_model.js');

var uri = 'mongodb://user:user@' +
  'cluster0-shard-00-00-ujwns.mongodb.net:27017,' +
  'cluster0-shard-00-01-ujwns.mongodb.net:27017,' +
  'cluster0-shard-00-02-ujwns.mongodb.net:27017/thatsmyband_dev' +
  'replicaSet=Cluster0-shard-0&authSource=admin&ssl=true';

function ConnectionCallback(err, db) {
	console.log('Erreur à la connexion à la base : ' + err);
}

// Méthodes publiques
function getUserData(callback) {
	var db = mongoose.createConnection(uri, null, ConnectionCallback);

	db.once('open', function() {
		console.log('Appel de la méthode getUserData');
		User.find({},{}, callback);
	});
}

exports.getUserData = getUserData;