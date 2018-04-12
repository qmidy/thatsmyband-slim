var express = require('express');
var router = express.Router();

/* GET Data from user. */
router.get('/', function(req, res, next) {  
  res.send('{' +
			'"Id": "USER_ID",' + 
			'"CashFlow": "USER_CASHFLOW",'+
			'"Band": {'+
				'"Id": "BAND_ID",'+
				'"Name": "BAND_NAME",'+
				'"Fame": "BAND_FAME",'+
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
});

module.exports = router;