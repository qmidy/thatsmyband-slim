var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};

handle["/"] = requestHandlers.healthcheck;
handle["/healthcheck"] = requestHandlers.healthcheck;
handle["/userdata"] = requestHandlers.userdata;

server.start(router.route, handle);