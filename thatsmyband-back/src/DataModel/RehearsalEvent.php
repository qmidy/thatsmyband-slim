<?php

namespace DataModel;

	use DataModel\GenericEvent;

	#DataModel d'un RehearsalEvent de calendrier
	class RehearsalEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Rehearsal";
		}
	}