<?php

namespace DataModel;

	#DataModel d'un Event de calendrier générique
	abstract class GenericEvent {

		### Constructeur ###
		public function __construct()
		{

		}

		#Type du GenericEvent
		public $Type;

		#Id du GenericEvent
		public $Id;
	}