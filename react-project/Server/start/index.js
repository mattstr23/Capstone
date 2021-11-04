const express = require("express");
const app = express();
const creds = require("./db");
const PORT = 5432;

app.use(express.json());

app.post("/createUser", (req, res) => {
	creds.connect((err, client, release) => {
		if (err) {
			return console.error("Error getting connected to the client", err.stack);
		}
		client.query(
			`INSERT INTO Users (firstName, lastName, email, password) VALUES ('${req.body.firstName}, ${req.body.lastName}, ${req.body.email}, ${req.body.password}');`,
			(err, result) => {
				if (err) {
					res.status(400).send(err.stack);
				}
				res.status(200).send(result);
			}
		);
	});
});

app.get("/getUser", (req, res) => {
	creds.connect((err, client, release) => {
		if (err) {
			return console.error("Error getting connected to the client", err.stack);
		}
		client.query(
			"SELECT (firstName, lastName) FROM Users" +
				`WHERE email = ${req.body.email} AND password = ${req.body.password}`,
			(err, result) => {
				if (err) {
					res.status(400).send(err.stack);
				}
				res.status(200).send(result.rows);
			}
		);
	});
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
