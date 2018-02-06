<?php

namespace Service;

	use DataModel\Band;
	use DataModel\Player;
	use DataModel\Track;
	use DataModel\Release;

	#Service de Band
	class BandService {

		### Constructeur Générique###
		public function __construct()
		{

		}

		#Méthode qui duplique tous les objets présents dans le Band
		#On ne duplique que les données utiles, n'est pas dupliqué :
		# L'id
		# Le name
		# Le Schedule
		public function DuplicateBand($band)
		{
			### Création de l'objet Band
			$result = new Band();

			$result->Cohesion = $band->Cohesion;

			### Récupération des données de Players
			$result->Players = array();
			foreach ($band->Players as $key => $value) {
				$result->Players[$key] = new Player();
				$result->Players[$key]->Id = $value->Id;
				$result->Players[$key]->Skill = $value->Skill;
			}

			### Récupération des données de Tracks
			$result->Tracks = array();
			foreach ($band->Tracks as $key => $value) {
				$result->Tracks[$key] = new Track();
				$result->Tracks[$key]->Id = $value->Id;
			}

			### Récupération des données de Releases
			$result->Releases = array();
			foreach ($band->Releases as $key => $value) {
				$result->Releases[$key] = new Release();
				$result->Releases[$key]->Id = $value->Id;
			}

			return $result;
		}
	}