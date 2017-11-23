<?php

use Slim\Http\Request;
use Slim\Http\Response;

include_once '/Service/UserService.php';

// Routes
$app->get('/', function (Request $request, Response $response, array $args) {
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

$app->get('/band', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/band' route");

    $args["expression"] = "Band";

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    // Render index view
    return $this->renderer->render($response, 'bandView.phtml', $args);
});

$app->get('/schedule', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/schedule' route");

    $args["expression"] = "Schedule";

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    // Render index view
    return $this->renderer->render($response, 'scheduleView.phtml', $args);
});



