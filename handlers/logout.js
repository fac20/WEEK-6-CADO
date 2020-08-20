const fs = require("fs");
const path = require("path");


function logoutHandler(request, response){
    response.writeHead(
        200,
        {
          'Set-Cookie': 'jwt=0; Max-Age=0',
          'Content-Type': 'text/html',
        }
      );
    return response.end("<h1>You have logged out</h1>");
}

module.exports = logoutHandler;