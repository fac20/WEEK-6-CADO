const dotenv = require("dotenv").config();
const pg = require("pg");
let connectStr = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "test") {
  connectStr = process.env.TEST_DATABASE_URL;
}

const db = new pg.Pool({ connectionString: connectStr });

module.exports = db;