const fs = require("fs");
const path = require("path");
const db = require("../database/connection");
const model = require("./model");
const SECRET = process.env.SECRET;

const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');

function submitHandler(request, response) {
    let body = "";
    request.on("data", chunk => {
        body += chunk;
    });
    request.on("end", () => {
        const data = new URLSearchParams(body);
        // const name = data.get("name"); 
        if (!request.headers.cookie) return response.end("<h1>Sign in first!</h1>");
        
        const { jwt } = parse(request.headers.cookie);

        if (!jwt) return response.end("<h1>Sign in first!</h1>");
  
        verify(jwt, SECRET, (err, jwt) => {
          if (err) {
            return response.end("<h1>Sign in first!</h1>");
          } else {
            const message = `Your username is: ${jwt.username}`;
            response.writeHead(
              200,
              {
                'Content-Type': 'text/plain',
                'Content-Length': message.length
              }
            );
        return response.end(message);

        // const msgtitle = data.get("msgtitle");
        // const message = data.get("message");
        // // const date = data.get("date");
        // console.log(data)

        // model.add(name, msgtitle, message);

        // // (if (db.query("SELECT username FROM users WHERE $1"))
        // //     IF boolean-expression THEN
        // //     statements
        // // END IF;

        // response.writeHead(302, { "location": "/" });
        // response.end();

    }});
    request.on("error", error => {
        response.writeHead(500, { "content-type" : "text/html" });
        response.end("<h1>B!tch please! You broke the server!!</h1>");
    }) 
    
    
    });
}



module.exports = submitHandler;