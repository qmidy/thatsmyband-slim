<?php

namespace Service;

	use Facebook\Facebook;
	use Facebook\SignedRequest;

	Class FacebookService {

		### Constructeur ###
		public function __construct()
		{

		}

		# Récupération de l'id du user
		public function GetUserId()
		{
			$facebook = new Facebook(array(
			  'app_id'  => '793344530828539',
			  'app_secret' => 'ff24e4ded643902337fae6aaa87594f3',
			  'default_graph_version' => 'v2.2'
			));

			// SignedRequest
			$signedRequest = new SignedRequest($facebook->getApp());

			// Get User ID
			$userId = $signedRequest->getUserId();

			echo "UserId" . $userId;

			return $userId;
		}
	}