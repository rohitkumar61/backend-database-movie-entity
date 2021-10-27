module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define("movie", {
	  title: {
		type: Sequelize.STRING
	  },
	  director: {
		type: Sequelize.STRING
	  },
	  year: {
		type: Sequelize.INTEGER
	  },
	  length_minutes: {
		type: Sequelize.INTEGER
	  }
	});
  
	return Movie;
  };