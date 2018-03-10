<?php

namespace DataModel;

	#DataModel d'un Release (EP, LP ou Album)
	class Release {

		### Constructeur ###
		public function __construct()
		{

		}

		#Id du Player
		public $Id;

		#Nom du Player
		public $Name;

		#Tableau de Tracks de la release
		public $Tracks;
	}