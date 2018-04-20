// Configuration du serveur

// Port
exports.ServerPort = '3000';

// Cors
exports.AccessControlAllowOrigin = '*';
exports.AccessControlAllowHeaders = 'Origin, X-Requested-With, Content-Type, Accept';

// Base de donnée
exports.DbUrl = 'mongodb://localhost:27017/user';
exports.DbOptions = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };