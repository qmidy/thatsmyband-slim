const mongoose = require('mongoose');

var uri = 'mongodb://root:root@cluster0-shard-00-00-ujwns.mongodb.net:27017,cluster0-shard-00-01-ujwns.mongodb.net:27017,cluster0-shard-00-02-ujwns.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true';

var db = mongoose.createConnection(uri);

function getUserData(callback) {
	var schema = mongoose.Schema({ id:String, name: String });
	var userdatacol = db.model('userdata', schema);

	userdatacol.findOne({id : '1'}, callback);
}

exports.getUserData = getUserData;