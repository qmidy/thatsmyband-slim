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
	include_once 'DBAService.php';

	#Service d'accès aux User
	# TRAITEMENT A FAIRE APRES SERIALISATION
	# https://stackoverflow.com/questions/10152904/unserialize-function-unserialize-error-at-offset
	Class UserService {

		### Constructeur ###
		public function __construct()
		{
			$this->dbaService = new DBAService();
		}

		### Membres privés ###
		private $dbaService;

		#Renvoie le User en fonction de son Id
		public function GetUserById($userId)
		{
			$dbData = $this->dbaService->Query("SELECT userData FROM `usertable` WHERE `id` = 2")->fetch();

			//echo json_encode($result);

			$result = json_decode($dbData["userData"]);

			return $result;
		}
	}