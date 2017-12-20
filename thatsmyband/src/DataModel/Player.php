<?php

	#DataModel d'un joueur
	class Player {

		### Constructeur Générique###
		public function __construct()
		{
			$ctp = func_num_args();
			$args = func_get_args();

			switch($ctp)
			{
				case 1:
					$this->constructorFromPlayer($args[0]);
					break;
				default:
					$this->constructor();
					break;
			}
		}

		### Constructeur avec un Player ####
		private function constructorFromPlayer($player)
		{
			$this->Id = $player->Id;
			$this->Name = $player->Name;
			$this->Skill = $player->Skill;
		}

		### Constructeur sans arguments ####
		private function constructor()
		{

		}

		#Id du Player
		public $Id;

		#Nom du Player
		public $Name;

		#Compétence de Player
		public $Skill;
	}