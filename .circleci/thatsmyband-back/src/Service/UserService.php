<?php

namespace Service;

	use DataModel\User;
	use DataModel\Band;
	use DataModel\Player;
	use DataModel\Track;
	use DataModel\Release;
	use DataModel\EmptyEvent;
	use DataModel\RehearsalEvent;
	use DataModel\ShowEvent;
	use DataModel\RecordingEvent;
	use Service\DBAService;

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
			$dbData = $this->dbaService->Query("SELECT userData FROM `usertable` WHERE `id` = 1")->fetch();

			//echo json_encode($result);

			$result = json_decode($dbData["userData"]);

			return $result;
		}
	}