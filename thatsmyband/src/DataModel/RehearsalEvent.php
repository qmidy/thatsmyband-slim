<?php

	include_once 'GenericEvent.php';
	include_once 'EventResult.php';
	include_once '/../Service/BandService.php';

	#DataModel d'un RehearsalEvent de calendrier
	class RehearsalEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Rehearsal";
		}
	}