function route(handle, pathname, request, response) {
	console.log("Début du traitement de l'URL " + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname](request, response);
	} else {
		console.log("Aucun gestionnaire associé à " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Non trouvé");
		response.end();	
	}
}

exports.route = route;