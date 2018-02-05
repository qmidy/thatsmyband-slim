<?php

use Slim\Http\Request;
use Slim\Http\Response;

include_once '/Service/UserService.php';
include_once '/Service/EventService.php';
include_once '/Service/FacebookService.php';

$app->get('/', function (Request $request, Response $response, array $args) {
    $this->logger->info("Slim-Skeleton '/' route");

    $args["subTemplate"] = 'subtemplates/indexTemplate.phtml';

    // Appel au service fb
    $facebookService = new FacebookService();
    $facebookService->GetUserId();

    // Render view
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});

// Routes
$app->get('/user', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/user' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    $args["subTemplate"] = 'subtemplates/userTemplate.phtml';

    // Render view
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});

$app->get('/band', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/band' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    $args["subTemplate"] = 'subtemplates/bandTemplate.phtml';

    // Render view
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});

$app->get('/schedule', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/schedule' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    $args["subTemplate"] = 'subtemplates/scheduleTemplate.phtml';

    // Render view
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});

$app->get('/executeEvent', function(Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/executeEvent' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $eventService = new EventService();
    $user = $userService->GetUserById($userId);
    
    $args["event"] = $eventService->ExecuteCurrentTimeEvent($user);

    $args["user"] = $user;

    $args["subTemplate"] = 'subtemplates/eventExecutionTemplate.phtml';

    // Render View
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});

$app->get('/addEvent', function(Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/addEvent' route");

    // Appel du User
    $userId = "123";
    $userService = new UserService();
    $user = $userService->GetUserById($userId);

    $args["user"] = $user;

    $args["subTemplate"] = 'subtemplates/eventAddTemplate.phtml';

    // Render View
    return $this->renderer->render($response, 'defaultTemplate.phtml', $args);
});



