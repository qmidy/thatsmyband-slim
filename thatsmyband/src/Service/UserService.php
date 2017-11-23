<?php

	include_once '/../DataModel/User.php';
	include_once '/../DataModel/Band.php';
	include_once '/../DataModel/Player.php';
	include_once '/../DataModel/Track.php';
	include_once '/../DataModel/Release.php';
	include_once '/../DataModel/Schedule.php';
	include_once '/../DataModel/EmptyEvent.php';
	include_once '/../DataModel/RehearsalEvent.php';
	include_once '/../DataModel/ShowEvent.php';
	include_once '/../DataModel/RecordingEvent.php';

	#Service d'accès aux User
	Class UserService {

		### Constructeur ###
		public function __construct()
		{

		}

		#Renvoie le User en fonction de son Id
		public function GetUserById($userId)
		{
			$result = new User();
			$result->Id = "USER_ID";
			$result->Name = "USER_NAME";
			$result->CashFlow = "USER_CASHFLOW";
			
			# Band du User
			$result->Band = new Band();
			$result->Band->Id = "BAND_ID";
			$result->Band->Name = "BAND_NAME";
			# Players du Band
			$player1 = new Player();
			$player1->Id = "PLAYER1_ID";
			$player1->Name = "PLAYER1_NAME";
			$player1->Skill = "PLAYER1_SKILL";
			$player2 = new Player();
			$player2->Id = "PLAYER2_ID";
			$player2->Name = "PLAYER2_NAME";
			$player2->Skill = "PLAYER2_SKILL";
			$result->Band->Players = array($player1, $player2);
			# Tracks du Band
			$track1 = new Track();
			$track1->Id = "TRACK1_ID";
			$track1->Name = "TRACK1_NAME";
			$track2 = new Track();
			$track2->Id = "TRACK2_ID";
			$track2->Name = "TRACK2_NAME";
			$track3 = new Track();
			$track3->Id = "TRACK3_ID";
			$track3->Name = "TRACK3_NAME";
			$result->Band->Tracks = array($track1, $track2, $track3);
			# Releases du Band
			$release1 = new Release();
			$release1->Id = "RELEASE1_ID";
			$release1->Name = "RELEASE1_NAME";
			$release1->Tracks = array($track1, $track2);
			$result->Band->Releases = array($release1);

			# Schedule du Band
			$result->Band->Schedule = new Schedule();
			$result->Band->Schedule->Id = "SCHEDULE_ID";
			# Events du Schedule
			$event1 = new EmptyEvent();
			$event1->Id = "EMPTYEVENT_ID";
			$event2 = new RehearsalEvent();
			$event2->Id = "REHEARSALEVENT_ID";
			$event3 = new ShowEvent();
			$event3->Id = "SHOWEVENT_ID";
			$event4 = new RecordingEvent();
			$event4->Id = "RECORDINGEVENT_ID";
			$result->Band->Schedule->GenericEvents = array($event1, $event2, $event3, $event4);

			return $result;
		}
	}