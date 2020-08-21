const fs = require('fs');
const path = require('path');
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');

function logoutTemplate() {
	return `
	<h1>You have logged out</h1>
	<button onclick="window.location.href='/'">Home</button>
	`;
}

function logoutHandler(request, response) {
	//check user is logged in first
	if (!request.headers.cookie) {
		response.writeHead(302, {
			Location: '/',
		});
		return response.end();
	}

	response.writeHead(200, {
		'Set-Cookie': 'jwt=0; Max-Age=0',
		'Content-Type': 'text/html',
	});
	return response.end(logoutTemplate());
}

module.exports = logoutHandler;
