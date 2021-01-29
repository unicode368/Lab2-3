const {Pool} = require('pg');

const pool = new Pool({
	user: "postgres",
	password: "Sobak@234",
	database: "sleep_calculator",
	host: "localhost",
	port: 5432
});

module.exports = pool;