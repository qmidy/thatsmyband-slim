<?php

	include_once 'GenericEvent.php';
	include_once 'EventResult.php';
	include_once '/../Service/BandService.php';

	#DataModel d'un RecordingEvent de calendrier
	class RecordingEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Recording";
		}

		#Méthode d'exécution de l'évènement
		public function Execute($user)
		{
			### Construction du Result
			$this->Result = new EventResult();

			### On récupère les données du Band avant de faire les traitements correspondant à l'event
			$bandService = new BandService();
			$this->Result->BandBeforeEvent = $bandService->DuplicateBand($user->Band);

			### On applique les traitements de l'event
			### Création d'un nouveau Release
			$newRelease = new Release();
			$newRelease->Name = "New Release";
			array_push($user->Band->Releases, $newRelease);
		}
	}