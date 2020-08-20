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
        const msgtitle = data.get("msgtitle");
        const message = data.get("message");
        if (!request.headers.cookie) return response.end("<h1>Sign in first!</h1>");
        
        const { jwt } = parse(request.headers.cookie);

        if (!jwt) return response.end("<h1>Sign in first!</h1>");
  
        verify(jwt, SECRET, (err, jwt) => {
          if (err) {
            return response.end("<h1>Sign in first!</h1>");
          } else {
            const username = jwt.username;
            model.add(username, msgtitle, message)
            response.writeHead(302, { "location": "/" });
            return response.end();

        // username --> id from users. plug that in with the mesage, and title, with user_id as the id from users

        
        // // const date = data.get("date");
        

        // // (if (db.query("SELECT username FROM users WHERE $1"))
        // //     IF boolean-expression THEN
        // //     statements
        // // END IF;

        

    }});
    request.on("error", error => {
        response.writeHead(500, { "content-type" : "text/html" });
        response.end("<h1>B!tch please! You broke the server!!</h1>");
    }) 
    
    
    });
}



module.exports = submitHandler;