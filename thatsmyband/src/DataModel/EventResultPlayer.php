<?php

	#DataModel du résultat d'un GenericEvent sur un Player
	class EventResultPlayer {

		### Constructeur ###
		public function __construct()
		{

		}

		### Players avant l'évènement (avec les valeurs initiales) ###
		public $BeforeEventPlayer;

		### Players après l'évènement (avec les nouvelles valeurs) ###
		public $AfterEventPlayer;

	}