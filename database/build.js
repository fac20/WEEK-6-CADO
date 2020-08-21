//file to initialise a new testing database before each test
const path = require('path');
const db = require('./connection');
const initPath = path.join(__dirname, '..', 'test', 'init.sql');
const initSQL = fs.readFileSync(initPath, 'utf-8');

function build() {
	return db.query(initSQL);
}

module.exports = build;
