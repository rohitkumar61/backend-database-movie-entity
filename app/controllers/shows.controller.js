const db = require("../models");
const Shows = db.shows;


exports.create = (req, res) => {
	// Validate request
	if (!req.body.movie_name) {
	  res.status(400).send({
		message: "Content can not be empty!"
	  });
	  return;
	}
  
	
    const id =req.params.id
	const shows = {
		movieId: `${id}`,
		movie_name: req.body.movie_name,
		theatre_name: req.body.theatre_name,
		rating: req.body.rating,
	    movie_info: req.body.movie_info,
	};
  
	// Save Shows in the database
	Shows.create(shows)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while creating the Movie."
		});
	  });
  };



  exports.findAll = (req, res) => {
	Shows.findAll()
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while retrieving shows."
		});
	  });
  };