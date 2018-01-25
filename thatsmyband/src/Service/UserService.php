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

			$result = unserialize($dbData["userData"]);

			echo serialize($result);

			return $result;
		}

		#Exécute le tour courant - Appelle la méthode Execute de l'événement correspondant
		public function ExecuteUserCurrentTime($user)
		{
			// Récupération de l'événement courant (Test de nullité à prévoir)
			$eventToExecute = $user->Band->Schedule->GenericEvents[$user->CurrentTime];

			// L'événement met à jour les données du User (si cest une répé, nouveau morceau écrit... et mise à jour des stats)
			// Et renvoie les différentiels pour les afficher dans l'interface sur l'événement.
			$eventToExecute->Execute($user);

			// On incrémente le temps courant du User
			$user->CurrentTime += 1;

			// On retourne l'événement qu'on vient d'exécuter
			return $eventToExecute;
		}
	}