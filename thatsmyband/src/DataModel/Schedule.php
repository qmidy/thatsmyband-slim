<?php

	#DataModel d'un calendrier
	class Schedule {

		### Constructeur ###
		public function __construct()
		{

		}

		#Id du Schedule
		public $Id;

		#Tableau d'Event du calendrier
		public $GenericEvents;
	}