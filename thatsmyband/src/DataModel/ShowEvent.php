<?php

	include_once 'GenericEvent.php';
	include_once 'EventResult.php';
	include_once '/../Service/BandService.php';

	#DataModel d'un ShowEvent de calendrier
	class ShowEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Show";
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
			### Augmentation du Skill des player
			foreach ($user->Band->Players as $key => $value) {
				$value->Skill++;
			}

			### Augmentation de la cohésion
			$user->Band->Cohesion++;
		}
	}