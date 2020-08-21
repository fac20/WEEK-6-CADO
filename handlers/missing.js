function missingHandler(request, response) {
	response.writeHead(404, { 'content-type': 'text/html' });
	response.end('<h1>B!tch please! That does not exist!</h1>');
}

module.exports = missingHandler;
