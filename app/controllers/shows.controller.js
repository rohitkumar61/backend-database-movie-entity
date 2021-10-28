const db = require("../models");
const Shows = db.shows;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.movie_name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
console.log(req.body,req.params.id)
  const id = req.params.id;
  const shows = {
    movieId: id,
    movie_name: req.body.movie_name,
    theatre_name: req.body.theatre_name,
    rating: req.body.rating,
    movie_info: req.body.movie_info,
  };

  // Save Shows in the database
  Shows.create(shows)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Movie.",
      });
    });
};

exports.findAll = (req, res) => {
  Shows.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving shows.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Shows.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Shows with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Shows with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Shows.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Shows was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Shows with id=${id}. Maybe Shows was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Shows with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Shows.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Shows was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Shows with id=${id}. Maybe Shows was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Shows with id=" + id,
      });
    });
};


