//необходимые модули
import express from "express";
import path from "path";
import mariadb from "mariadb"


const PORT = process.env.port;

const app = express();


const pool = mariadb.createPool({
	host: 'localhost',
	user: 'Tyler',
	password: process.env.DB_PASSWORD || 'Python228',
	database: 'cloud_api'
});

async function main() {
	try {

		const connection = await pool.getConnection();


	} catch(err) {
		console.log(err);
	}


}
app.listen(3000);
main();