<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
$app->get('/', function (Request $request, Response $response, array $args) {
    // la date doit être au format yyyy-mm-dd

    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    $args["expression"] = "test";

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
