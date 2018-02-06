<?php

namespace DataModel;

	use DataModel\GenericEvent;

	#DataModel d'un RecordingEvent de calendrier
	class RecordingEvent extends GenericEvent {

		### Constructeur ###
		public function __construct()
		{
			$this->Type = "Recording";
		}
	}