const fs = require('fs');
const path = require('path');
const model = require('./model');

function getUsernamesHandler(request, response) {
<<<<<<< HEAD
  model.getAllUsernames()
  .then((result) => {
    const users = result.rows;
    response.writeHead(200, { "content-type": "text/html" });
    response.end(`${JSON.stringify(users)}`);
  })
  .catch((error) => {
    console.log(error);
    response.writeHead(500, {"content-type":"text/html"});
    response.end("<h1>Something went wrong</h1>")
  })
};
=======
	model
		.getAllUsernames()
		.then(result => {
			const users = result.rows;
			response.writeHead(200, { 'content-type': 'text/html' });
			response.end(`${JSON.stringify(users)}`);
		})
		.catch(error => {
			console.log(error);
			response.writeHead(500, { 'content-type': 'text/html' });
			response.end('<h1>Something went wrong</h1>');
		});
}
>>>>>>> master

module.exports = getUsernamesHandler;
