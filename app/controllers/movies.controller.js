const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
	// Validate request
	if (!req.body.title) {
	  res.status(400).send({
		message: "Content can not be empty!"
	  });
	  return;
	}
  
	// Create a Movie
	const movie = {
	  title: req.body.title,
	  director: req.body.director,
	  year: req.body.year,
	  length_minutes: req.body.length_minutes,
	};
  
	// Save Movie in the database
	Movie.create(movie)
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while creating the Tutorial."
		});
	  });
  };


  exports.findAll = (req, res) => {
	const title = req.query.title;
	var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
	Movie.findAll({ where: condition })
	  .then(data => {
		res.send(data);
	  })
	  .catch(err => {
		res.status(500).send({
		  message:
			err.message || "Some error occurred while retrieving tutorials."
		});
	  });
  };


  exports.findOne = (req, res) => {
	const id = req.params.id;
  
	Movie.findByPk(id)
	  .then(data => {
		if (data) {
		  res.send(data);
		} else {
		  res.status(404).send({
			message: `Cannot find Movie with id=${id}.`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving Tutorial with id=" + id
		});
	  });
  };



  exports.update = (req, res) => {
	const id = req.params.id;
  
	Movie.update(req.body, {
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "Movie was updated successfully."
		  });
		} else {
		  res.send({
			message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error updating Tutorial with id=" + id
		});
	  });
  };


  exports.delete = (req, res) => {
	const id = req.params.id;
  
	Movie.destroy({
	  where: { id: id }
	})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: "Movie was deleted successfully!"
		  });
		} else {
		  res.send({
			message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Could not delete Movie with id=" + id
		});
	  });
  };

