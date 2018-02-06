<?php

namespace DataModel;

	#DataModel d'un groupe
	class Band {

		### Constructeur ###
		public function __construct()
		{

		}

		#Id du Band
		public $Id;

		#Nom du Band
		public $Name;

		#Cohésion du Band
		public $Cohesion;

		#Tableau de Player du Band
		public $Players;

		#Tableau de Track du Band
		public $Tracks;

		#Tableau de Release du Band
		public $Releases;

		#Calendrier du Band
		public $Schedule;
	}