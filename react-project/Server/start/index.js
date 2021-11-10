const express = require("express");
const app = express();
const creds = require("./db");
const PORT = 3001;
const bcrypt = require("bcrypt");
const cors = require("cors");
// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	console.log("hello");
});

app.post("/registerUser", async (req, res) => {
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

app.get("/loginUser", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const compare = async (results, res) => {
		const validate = await bcrypt.compare(password, results.rows[0].password);
		console.log("user was ", validate);
		if (validate) {
			// righrt here
			res.status(200).send(results.rows[0]);
		} else {
			res.status(400).send("error");
		}
	};
	creds.connect((err, client, release) => {
		if (email) {
			// let queue = creds.query(`SELECT * FROM "Users" WHERE email = '${email}'`);
			// console.log(queue);
			creds.query(
				`SELECT * FROM "Users" WHERE email = '${email}'`,
				(error, results) => {
					if (results) {
						compare(results, res);
					} else {
						res.send(error);
					}
					// res.end();
				}
			);
		} else {
			res.send("Please enter Email and Password!");
			res.end();
		}
	});
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
