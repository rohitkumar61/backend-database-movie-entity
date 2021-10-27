module.exports = app => {
	const shows = require("../controllers/shows.controller.js");
  
	let router = require("express").Router();
  
	// Create a new Shows
	router.post("/:id", shows.create);
  
	// Retrieve all Shows
	router.get("/", shows.findAll);
  
	// Retrieve a single Shows with id
	router.get("/:id", shows.findOne);
  
	// Update a Shows with id
	router.put("/:id", shows.update);
  
	// Delete a Shows with id
	router.delete("/:id", shows.delete);
  
  
	app.use('/api/shows', router);
  };