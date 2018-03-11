var dba = require("./Services/databaseAccessService");

function healthcheck(request, response) {
	console.log("Le gestionnaire 'healthcheck' est appelé.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("I'm up");
	response.end();	
}

function userdata(request, response) {
	console.log("Le gestionnaire 'userdata' est appelé.");
	dba.getUserData(callbackGetUserData(response));

}

exports.healthcheck = healthcheck;
exports.userdata = userdata;

function callbackGetUserData(response) {
	return function(err, data, response)
	{
		if(err) {
			console.log('error occured in the database' + err);
			response.writeHead(500, {"Content-Type" : "text/plain"});
			response.write(err);
			response.end();
		}

		console.log('donnée retournée : ' + data);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(data);
		response.end();
	}
}