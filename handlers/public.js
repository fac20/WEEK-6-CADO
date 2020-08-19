const fs = require("fs");
const path = require("path");

//check what file is being requested
const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    ico: "image/x-icon",
};

function publicHandler(request, response){
    const url = request.url;
    const urlArray = url.split(".");
    const extension = urlArray[1];
    const type = types[extension];
    const filePath = path.join(__dirname, "..", url);
    fs.readFile(filePath, (error, file) => {
        if (error){
            console.error(error);
            response.writeHead(404, {"content-type" : "text/html"});
            response.end("<h1>Not Found</h1>");
        } else {
          response.writeHead(200, {"content-type" : type});
          response.end(file);
        }
});

}

module.exports = publicHandler;