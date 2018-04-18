// Declarations des dépendances
var mongoose = require('mongoose');

// Datamodel du user
var userSchema = mongoose.Schema({
	name:String
});

// Export du model 
exports.model = mongoose.model('user', userSchema);