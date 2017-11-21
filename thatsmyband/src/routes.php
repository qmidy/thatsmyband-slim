<?php

use Slim\Http\Request;
use Slim\Http\Response;

include_once '/Service/UserService.php';

// Routes
$app->get('/', function (Request $request, Response $response, array $args) {
    // la date doit être au format yyyy-mm-dd

    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    $args["expression"] = "Home";

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


