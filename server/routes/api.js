const express = require('express');
const router = express.Router();
const User = require('../models/user');
const post = require('../models/post');
const mongoose = require('mongoose');
const db = "mongodb+srv://nesobaka:nesobaka8@cluster0-pz4pq.gcp.mongodb.net/test?retryWrites=true&w=majority";

console.log('akajajaja');

mongoose.connect(db, err => {
	if(err) {
		console.log("Error!" + err);
	} else {
		console.log("Connected to mongodb");
	}
});

router.get('/', (req, res) => {
	res.send('From API route')
});

router.get('/my_memes', (req, res) => {
	res.send('ok')
});

router.post('/register', (req, res) => {
	let userData = req.body;
	let user = new User(userData);
	user.save((error, registeredUser) => {
		if (error) {
			console.log(error);
		} else {
			res.status(200).send(registeredUser);
		}
	});
});

router.post('/login', (req, res) => {
	let userData = req.body;
	User.findOne({email: userData.email}, (error, user) => {
		if (error) {
			console.log(error);
		} else {
			if (!user) {
				res.status(401).send('Invalid email')
			} else {
				if (user.password !== userData.password) {
					res.status(401).send('Invalid password')
				} else {
					res.status(200).send(user);
				}
			}
		}
	})
});

router.post('/blog', (req, res) => {
	let postData = req.body;
	User.findOne({short_desc: postData.short_desc}, (error, user) => {
		if (error) {
			console.log(error);
		} else {
			console.log("published!");
		}
	})
});

router.get('/events', (req, res) => {
	let events = [
	{
		"_id": "1",
		"name": "login",
		"description": "these",
		"date": "2019-12-21"
	}
	]
	res.json(events);
});

router.get('/special', (req, res) => {
	let events = [
	{
		"_id": "1",
		"name": "login",
		"description": "these",
		"date": "2019-12-21"
	}
	]
	res.json(events);
});

module.exports = router;