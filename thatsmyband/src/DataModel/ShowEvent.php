<?php

namespace DataModel;

	use DataModel\GenericEvent;

	#DataModel d'un ShowEvent de calendrier
	class ShowEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Show";
		}
	}