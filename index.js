const express = require("express");
const app = express();
const Joi = require("joi");
const pg = require("pg");


const client = require("./connection");
app.use(express.json());


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

client.connect();

//api for all movies

app.get("/api/movies/", (req, res) => {
	client.query(`Select * from movies`, (err, result) => {
	  if (!err) {
		res.send(result.rows);
	  }
	});
	client.end;
  });
  

   //api for single movies
  
   app.get("/api/movies/:id", (req, res) => {
	client.query(
	  `SELECT * FROM movies WHERE id = ${req.params.id}`,
	  (err, result) => {
		if (!err) {
		  res.send(result.rows);
		}
	  }
	);
	client.end;
  });