<?php

	#DataModel de l'utilisateur de l'application
	class User {

		### Constructeur ###
		public function __construct()
		{

		}

		#Id du User
		public $Id;

		#Nom du User
		public $Name;

		#Argent disponible pour le User
		public $CashFlow;

		#Band du User
		public $Band;
	}