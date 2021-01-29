const {Pool} = require('pg');

const pool = new Pool({
	user: "postgres",
	password: "Sobak@234",
	database: "my_blog",
	host: "localhost",
	port: 5432
});

module.exports = pool;