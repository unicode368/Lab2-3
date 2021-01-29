const express = require('express');

var port = process.env.PORT || 3000;
const app = express();
const pool = require("./db.js");
const path = require('path');
const session = require('express-session');


app.use(express.json());
const cors = require('cors');
app.use(cors({
	origin: "http://localhost:4200",
	credentials: true
}));

app.use(session({
    secret: 'secret token',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    name: 'session cookie name'
}));

app.get('/', function(req, res) {
	res.send('SOBAKA');
});

app.post('/login', async (req, res) => {
    try {
    	const {login, password} = req.body;
        let user = await pool.query("SELECT * FROM users WHERE login=$1 AND password=$2",
			[login, password]
			);
        if(user !== null) {
            req.session.user = {
                  login: user.rows[0].login,
                  password: user.rows[0].password
            };
            console.log(req.session);
            res.json()
        } else {
           // Login error
        }
    } catch(err) {
        res.sendStatus(500);
    }
});

app.post('/register', async (req, res) => {
	const {username, password} = req.body;
		const newUser = await pool.query("INSERT INTO users(\"login\", \"password\", \"role\") VALUES ($1, $2, $3) RETURNING *",
			[username, password, "user"]
			);
		var person_id = newUser.rows[0].person_id;
		res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ url: '/users/${person_id}'});
});


app.listen(port, function() {
	console.log('Server is running on localhost:' + port);
})