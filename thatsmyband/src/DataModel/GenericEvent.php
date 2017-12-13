<?php

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

		#Résultat d'un GenericEvent
		public $Result;

		#Méthode d'exécution de l'évènement
		public function Execute($user)
		{
				
		}
	}