module.exports = app => {
	const movies = require("../controllers/movies.controller.js");
  
	let router = require("express").Router();
  
	// Create a new Movies
	router.post("/", movies.create);
  
	// Retrieve all movies
	router.get("/", movies.findAll);
  
	// Retrieve shows 

	router.get("/:id/shows", movies.movieWithShows);
	router.get("/shows", movies.allMoviesWithShows);
	

	router.get("/:id", movies.findOne);
  
	// Update a Movies with id
	router.put("/:id", movies.update);
  
	// Delete a Movies with id
	router.delete("/:id", movies.delete);
  
  
	app.use('/api/movies', router);
  };