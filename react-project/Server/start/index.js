const express = require("express");
const app = express();
const creds = require("./db");
const PORT = 3001;
const bcrypt = require("bcrypt");

app.use(express.json());

app.get("/", (req, res) => {
	console.log("hello");
});

app.post("/createUser", async (req, res) => {
	const hash = await bcrypt.hash(req.body.password, 10);
	// const insertUser = async () => {
	//     const user = await client.query(`INSERT INTO Users (firstName, lastName, email, password) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${hash}');`)
	// }
	creds.connect((err, client, release) => {
		creds.query(
			`INSERT INTO "Users" ("firstName", "lastName", "email", "password") VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${hash}');`,
			(err, result) => {
				console.log(result);
				console.log(err);
				// if (err) {
				// 	res.status(400).send(err.stack);
				res.send(result);
				// }
				// res.status(200).send(result, hash);
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
				`WHERE email = ${req.body.email}`,
			(err, result) => {
				// if (err) {
				// 	res.status(400).send(err.stack);
				res.send("test");
				// }
				// res.status(200).send(result.rows);
			}
		);
	});
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
