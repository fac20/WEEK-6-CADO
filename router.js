//we need handlers for home, public, missing, submit
//also for the model so the server can talk to the database?

const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const getPostsHandler = require("./handlers/getPosts");
const getUsernamesHandler = require("./handlers/getUsernames");
const submitHandler = require("./handlers/submit");
const dataSubmission = require("./handlers/dataSubmission");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitHandler(request, response);
  } else if (url === "/get-posts") {
    getPostsHandler(request, response);
  } else if (url === "/get-usernames") {
    getUsernamesHandler(request, response);
  } else if (url === "/getinhere" && method === "GET") {
    dataSubmission.getLoginAndSignUpHandler(request, response);
  } else if (url === "/log-in" && method === "POST") {
    dataSubmission.postLoginHandler(request, response);
  } else if (url === "/sign-up" && method === "POST") {
    dataSubmission.postSignUpHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
