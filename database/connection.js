require("dotenv").config();
const pg = require("pg");
const connectStr = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "test") {
  connectionString = process.env.TEST_DATABASE_URL;
}

const db = new pg.Pool({ connectionString: connectStr });

module.exports = db;