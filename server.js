const http = require("http");
const PORT = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0" || "localhost";
const router = require("./router");


const server = http.createServer(router);


server.listen(PORT, hostname, () => console.log(`Woof! Listening on http://${hostname}:${PORT}`));

// catch server error here 
process.on("unhandledRejection", error => {
    console.error(error);
    process.exit(1);
    });