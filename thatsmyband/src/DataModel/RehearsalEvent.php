<?php

	include_once 'GenericEvent.php';
	include_once 'EventResult.php';

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
			$this->Result = new EventResult();
		}
	}