const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const model = require("./model");
const { parse } = require('cookie');
const { sign, verify } = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function getLoginAndSignUpHandler(request, response) {
  const filePath = path.join(__dirname, "../public/login.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not Found</h1>");
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}

function postLoginHandler(request, response) {
  getBody(request)
  .then(body => {
    const user = new URLSearchParams(body);
    const username = user.get("usernameli");
    const password = user.get("passwordli");
    
    //create a logged in user object from body here
    const loggedInUser = {
      username: username
    }

    model
      .checkUser(username) //run to model.js and find user, return username with password
      .then(db => db.rows[0])
      .then(dbUser => bcrypt.compare(password, dbUser.password))
      .then(match => {
        if (!match) throw new Error("Password mismatch");
        //create the cookie here
        const logInCookie = sign(loggedInUser, SECRET);
        response.writeHead(302, { 
          "location": "/", 
          "content-type": "text/html",
          //send cookie here
          'Set-Cookie': `jwt=${logInCookie}; HttpOnly; logged_in=true`
         });
        response.end(); // put personalised message
      })
      .catch(error => {
        console.error(error);
        response.writeHead(401, { "content-type": "text/html" });
        response.end(`
          <h1>Password incorrect</h1>
        `);
      });
  })
  .catch(error => {
    console.error(error);
    response.writeHead(500, { "content-type": "text/html" });
    response.end(`
      <h1>Something went wrong, sorry</h1>
    `);
  });
}

function postSignUpHandler(request, response) {
  getBody(request)
    .then((body) => {
      const user = new URLSearchParams(body); // turns url params into object

      const userDetails = {
        username: user.get("usernamesu"),
        password: user.get("passwordsu"),
        location: user.get("location"),
        image: user.get("imageurl"),
      };

      bcrypt
        .genSalt(12)
        .then((salt) => bcrypt.hash(userDetails.password, salt))
        .then((hash) => {
          userDetails.password = hash;
          model.createUser(userDetails);
        })
        .then(() => {
          //build the cookie here
          const signUpCookie = sign(userDetails, SECRET);
          response.writeHead(302, { 
            //send the cookie here
            location: "/",
            'Set-Cookie': `jwt=${signUpCookie}; HttpOnly; logged_in=true`
          });
          response.end(); // try later to see if we can add personalised message
        })
        .catch((error) => {
          console.error(error);
          response.writeHead(500, { "content-type": "text/html" });
          response.end(
            `<h1>Holy poop on a cracker! Something went wrong!</h1>`
          );
        });
    })
    .catch((error) => {
      console.error(error);
      response.writeHead(500, { "content-type": "text/html" });
      response.end(
        `<h1>Bark! Bark!! Something went wrong get me out of here!!!!</h1>`
      );
    });
}

// gets data from the request
function getBody(request) {
  let body = "";
  return new Promise((resolve, reject) => {
    request.on("data", (chunk) => (body += chunk));
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

module.exports = {
  postLoginHandler,
  postSignUpHandler,
  getLoginAndSignUpHandler,
};
