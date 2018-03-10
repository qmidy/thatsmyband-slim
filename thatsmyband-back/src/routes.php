<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Service\UserService;
use Service\FacebookService;

// Routes ne renvoyant que les données
$app->get('/userdata', function(Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/user' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    return $response->withJson($user)->withAddedHeader('Access-Control-Allow-Origin', '*');
});