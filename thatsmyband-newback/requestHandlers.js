var dba = require("./Services/databaseAccessService");

function healthcheck(request, response) {
	console.log("Le gestionnaire 'healthcheck' est appelé.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("I'm up");
	response.end();	
}

function userdata(request, response) {
	console.log("Le gestionnaire 'userdata' est appelé.");
	//dba.getUserData(callbackGetUserData(response));
	response.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin":"*"});
	response.write('{' +
			'"Id": "1",' + 
			'"Name": "USER_NAME",'+
			'"CashFlow": "USER_CASHFLOW",'+
			'"Band": {'+
				'"Id": "BAND_ID",'+
				'"Name": "BAND_NAME",'+
				'"Cohesion": "BAND_COHESION",'+
				'"Players": [{'+
					'"Id": "PLAYER1_ID",'+
					'"Name": "PLAYER1_NAME",'+
					'"Skill": "PLAYER1_SKILL"'+
				'}, {'+
					'"Id": "PLAYER2_ID",'+
					'"Name": "PLAYER2_NAME",'+
					'"Skill": "PLAYER2_SKILL"'+
				'}],'+
				'"Tracks": [{'+
					'"Id": "TRACK1_ID",'+
					'"Name": "TRACK1_NAME"'+
				'}, {'+
					'"Id": "TRACK2_ID",'+
					'"Name": "TRACK2_NAME"'+
				'}, {'+
					'"Id": "TRACK3_ID",'+
					'"Name": "TRACK3_NAME"'+
				'}],'+
				'"Releases": [{'+
					'"Id": "RELEASE1_ID",'+
					'"Name": "RELEASE1_NAME",'+
					'"Tracks": [{'+
						'"Id": "TRACK1_ID",'+
						'"Name": "TRACK1_NAME"'+
					'}, {'+
						'"Id": "TRACK2_ID",'+
						'"Name": "TRACK2_NAME"'+
					'}]'+
				'}],'+
				'"Schedule": {'+
					'"Id": "SCHEDULE_ID",'+
					'"GenericEvents": [{'+
						'"Type": null,'+
						'"Id": "EMPTYEVENT_ID"'+
					'}, {'+
						'"Type": "Rehearsal",'+
						'"Id": "REHEARSALEVENT_ID"'+
					'}, {'+
						'"Type": "Show",'+
						'"Id": "SHOWEVENT_ID"'+
					'}, {'+
						'"Type": "Recording",'+
						'"Id": "RECORDINGEVENT_ID"'+
					'}]'+
				'}'+
			'},'+
			'"CurrentTime": "3"'+
		'}');
	response.end();
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