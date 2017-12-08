<?php

	#DataModel d'un Event de calendrier générique
	abstract class GenericEvent {

		### Constructeur ###
		public function __construct()
		{

		}

		#Id du GenericEvent
		public $Id;

		#Méthode d'exécution de l'évènement
		public function Execute($user)
		{
			
		}

	}