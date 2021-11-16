const express = require("express");
const app = express();
const creds = require("./db");
const PORT = 3001;
const bcrypt = require("bcrypt");
const cors = require("cors");
// const jwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const jwtSecret = "secret123";
// middleware
app.use(express.json());
app.use(cors());
// app.use(jwt({ secret: jwtSecret, algorithms: ["HS256"] }));

app.get("/", (req, res) => {
	console.log("hello");
});

app.post("/registerUser", async (req, res) => {
	const hash = await bcrypt.hash(req.body.password, 10);
	const email = req.body.email;
	const password = req.body.password;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	// const insertUser = async () => {
	//     const user = await client.query(`INSERT INTO Users (firstName, lastName, email, password) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${hash}');`)
	// }
	creds.connect((err, client, release) => {
		if (email && password && lastName && firstName) {
			creds.query(
				`INSERT INTO "Users" ("firstName", "lastName", "email", "password") VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${hash}');`,
				(err, result) => {
					if (err) {
						res.status(400).send(err);
					}
					// if (result) {
					// 	res.redirect("http://localhost:3000");
					// }
					res.status(200).send(result);
				}
			);
		}
	});
});

app.post("/loginUser", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const compare = async (results, res) => {
		const validate = await bcrypt.compare(password, results.rows[0].password);
		console.log("user was ", validate);
		if (validate) {
			//one or the other
			const accessToken = jwt.sign(
				{
					firstName: results.rows[0].firstName,
					lastName: results.rows[0].lastName,
					email: results.rows[0].email,
					id: results.rows[0].id,
				},
				jwtSecret,
				{ expiresIn: 10800 }
			);

			var ca = accessToken;
			var decoded = jwt_decode(ca);
			console.log("line 69", decoded);
			res.status(200).send("user was authenticated");
		} else {
			res.status(400).send("User not authenticated");
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
						// console.log(results);
						compare(results, res);
					} else {
						res.status(400).send(error);
					}
					// res.end();
				}
			);
		} else {
			res.status(400).send("Please enter Email and Password!");
			res.end();
		}
	});
});

app.get("/account/:id", (req, res) => {
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (authHeader) {
		let token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, jwtSecret);
		if (decoded) {
			const id = decoded.id;

			creds.connect((err, client, release) => {
				creds.query(
					`SELECT * FROM "Users" WHERE id = ${id}`,
					(error, results) => {
						if (results) {
							res.send(results);
						} else {
							res.send(error);
						}
					}
				);
			});
		}
	} else {
		res.end();
	}
});

app.delete("/deleteUser", (req, res) => {
	creds.connect((err, client, release) => {
		creds.query(
			`DELETE FROM "Users" WHERE email = ${req.body.email}`,
			(error, results) => {
				if (results) {
					res.send(results);
				} else {
					res.send(error);
				}
			}
		);
	});
});

app.put("/updateUser", (req, res) => {
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (authHeader) {
		let token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, jwtSecret);
		if (decoded) {
			const id = decoded.id;
			creds.connect((err, client, release) => {
				creds.query(
					`UPDATE "Users" SET email = ${req.body.email}, firstName = ${req.body.firstName}, lastName = ${req.body.lastName}, password = ${req.body.password} WHERE id = ${id}`,
					(error, results) => {
						if (results) {
							res.send(results);
						} else {
							res.send(error);
						}
					}
				);
			});
		}
	} else {
		res.end();
	}
});

app.delete("/removeCrypto", (req, res) => {
	creds.connect((err, client, release) => {
		creds.query(
			`DELETE FROM "Wallets" WHERE id = ${req.id}`,
			(error, results) => {
				if (results) {
					res.send(results);
				} else {
					res.send(error);
				}
			}
		);
	});
});

app.post("/addCrypto", (req, res) => {
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (authHeader) {
		let token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, jwtSecret);
		if (decoded) {
			const id = decoded.id;
			creds.connect((err, client, release) => {
				creds.query(
					`UPDATE "Wallets" SET "cryptosIds" = '${req.cryptosIds}, "balance" = '${req.balance}' WHERE id = ${id}`,
					(error, results) => {
						if (results) {
							res.send(results);
						} else {
							res.send(error);
						}
					}
				);
			});
		}
	} else {
		res.end();
	}
});

app.post("/allCrypto", (req, res) => {
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (authHeader) {
		let token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, jwtSecret);
		if (decoded) {
			const id = decoded.id;
			creds.connect((err, client, release) => {
				creds.query(
					`SELECT * FROM "Wallets" WHERE id = ${id}`,
					(error, results) => {
						if (results) {
							res.send(results);
						} else {
							res.send(error);
						}
					}
				);
			});
		}
	} else {
		res.end();
	}
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
