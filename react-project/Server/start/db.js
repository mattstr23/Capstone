const Pool = require("pg").Pool;

const creds = new Pool({
	host: "fanny.db.elephantsql.com",
	port: 5432,
	database: "soejbsoj",
	user: "soejbsoj",
	password: "g5Fj9W9_eiyCwZUo22G18RKW57XGXw0F",
});

module.exports = creds;
