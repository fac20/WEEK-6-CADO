const fs = require("fs");
const path = require("path");


function logoutHandler(request, response){
    // const filePath = path.join(__dirname, );
    // fs.readFile(filePath, (error, file) => {
        if (error){
            console.error(error);
            response.writeHead(404, {"content-type" : "text/html"});
            response.end("<h1>Not Found</h1>");
        } else {
            response.writeHead(302, { 'location': '/', 'Set-Cookie': 'logged_in=0 ; Max-Age=0' });    // colon or semi colon??
          response.end();
        }
}


module.exports = logoutHandler;