//we need handlers for home, publ{}ic, missing, submit
//also for the model so the server can talk to the database?

const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const getPostsHandler = require("./handlers/getPosts");
const submitHandler = require("./handlers/submit");
const dataSubmission = require("./handlers/dataSubmission");

function router(request, response) {
    const url = request.url;
    const method = request.method;

    if (url === "/") {
        homeHandler(request, response);
    } else if (url.includes("public")) {
        publicHandler(request, response);
    } else if (url.includes("submit") && method === "POST") {
        submitHandler(request, response);
    } else if (url.includes("get-posts")) {
        getPostsHandler(request, response);
    } else if (url.includes("login") && method === "POST") {
        dataSubmission.postLoginHandler(request, response);
    } else if (url.includes("login") && method === "GET") {
        dataSubmission.getLoginHandler(request, response);
    } else if (url.includes("sign-up") && method === "POST") {
        dataSubmission.postSignUpHandler(request, response);
    } else if (url.includes("sign-up") && method === "GET") {
        dataSubmission.getSignUpHandler(request, response);
    } else {
        missingHandler(request, response);
    }
}

module.exports = router;