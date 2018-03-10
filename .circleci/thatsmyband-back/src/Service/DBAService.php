<?php

namespace Service;

	use \PDO;

	Class DBAService {

		### Constructeur ###
		public function __construct()
		{
			$this->host = "localhost";
			$this->user = "root";
			$this->passwd = "";
			$this->bddname = "thatsmyband";
			$this->Connect();
		}

		### Membres privés ####
		private $host;
		private $user;
		private $passwd;
		private $bddname;
		private $bdd;

		# Connection à la base
		private function Connect()
		{
			# Connection en utilisant PDO
			try
			{
				$this->bdd = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->bddname . ";charset=utf8", $this->user, $this->passwd );
			}
			catch(Exception $e)
			{
				die('Erreur : ' . $e->getMessage());
			}
		}
		
		# Requête à la base
		public function Query($query)
		{
			try
			{
				$response = $this->bdd->query($query);
				# On retourne le résultat de la requête sous forme brute
				return $response;
			}
			catch (Exception $e)
			{
				die('Erreur : ' . $e->getMessage());
				return -1;
			}
		}
	}