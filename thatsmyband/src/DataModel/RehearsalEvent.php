<?php

	include_once 'GenericEvent.php';
	include_once 'EventResult.php';
	include_once 'EventResultPlayer.php';

	#DataModel d'un RehearsalEvent de calendrier
	class RehearsalEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Rehearsal";
		}

		#Méthode d'exécution de l'évènement
		public function Execute($user)
		{
			### On récupère les Players avant de faire les traitements correspondant à l'event
			$eventResultEventArray = array();
			foreach ($user->Band->Players as $key => $value) {
				$eventResultPlayer = new EventResultPlayer();
				$eventResultPlayer->BeforeEventPlayer = new Player($value);
				$eventResultEventArray[$key] = $eventResultPlayer;
			}
			### On récupère les données du Band avant de faire les traitements correspondant à l'event
			### TODO

			### On applique les traitements de l'event
			### TODO : Nouveau morceau
			### Augmentation du Skill des player
			foreach ($user->Band->Players as $key => $value) {
				$value->Skill++;
				$eventResultEventArray[$key]->AfterEventPlayer = $value;
			}

			### Construction du Result
			$this->Result = new EventResult();
			$this->Result->EventResultPlayers = $eventResultEventArray;
		}
	}