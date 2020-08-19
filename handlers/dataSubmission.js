const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const model = require("./model");

function postLoginHandler() {}

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
        .then((salt) => bcrypt.hash(password, salt))
        .then((hash) => {
          userDetails.password = hash;
          model.createUser(userDetails);
        })
        .then(() => {
          response.writeHead(200, { location: "/" });
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
        `<h1>Bark! Bark!! something went wrong get me out of here!!!!</h1>`
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

module.exports = { postLoginHandler, postSignUpHandler };
