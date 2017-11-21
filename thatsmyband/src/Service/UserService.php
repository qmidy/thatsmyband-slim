<?php

	include_once '/../DataModel/User.php';

	#Service d'accès aux User
	Class UserService {

		### Constructeur ###
		public function __construct()
		{

		}

		#Renvoie le User en fonction de son Id
		public function GetUserById($userId)
		{
			$result = new User();
			$result->Id = "USER_ID";
			$result->Name = "USER_NAME";
			$result->CashFlow = "USER_CASHFLOW";
			return $result;
		}
	}