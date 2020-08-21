//file to initialise a new testing database before each test
const fs = require("fs");
const path = require("path");
const db = require("./connection");
console.log(__dirname);
const initPath = path.join (__dirname, "..", "test", "init.sql");
const initSQL = fs.readFileSync(initPath, "utf-8");
console.log("initpath:", initPath);
console.log("initSQL", initSQL);

function build() {
  return db.query(initSQL);
}

module.exports = build;