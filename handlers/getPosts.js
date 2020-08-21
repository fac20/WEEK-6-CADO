const fs = require('fs');
const path = require('path');
const model = require('./model');

function getPostsHandler(request, response) {
	model.getPostsData().then(result => {
		const users = result.rows;
		response.writeHead(200, { 'content-type': 'text/html' });
		response.end(`${JSON.stringify(users)}`);
	});
}

module.exports = getPostsHandler;
