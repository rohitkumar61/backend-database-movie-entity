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



  // api for posting movie
  
  app.post("/api/movies", (req, res) => {
	const movie = req.body;
	console.log(movie)
	let insertQuery = `INSERT INTO movies(title, director, year,length_minutes) 
						 values('${movie.title}', '${movie.director}', '${movie.year}','${movie.length_minutes}')`;
  
	client.query(insertQuery, (err, result) => {
	  if (!err) {
		res.send("Insertion was successful");
	  } else {
		console.log(err.message);
	  }
	});
	client.end;
  });

  // api for updating movie
  
  
  app.put("/api/movies/:id",(req,res)=>{
	let movie = req.body;
	// console.log(movie)
	let updateQuery = `UPDATE movies
					   SET title = '${movie.title}',
					   director = '${movie.director}',
					   year = '${movie.year}',
					   length_minutes = '${movie.length_minutes}'
					   WHERE id = '${req.params.id}'`

	client.query(updateQuery, (err, result)=>{
		if(!err){
			res.send('Update was successful')
		}
		else{ 
			// console.log("ERRRRRRRR")
			console.log(err.message) }
	})
	client.end;
})
