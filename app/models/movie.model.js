module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define("movie", {

	  title: {
		type: Sequelize.STRING,
		notNull: true,
	  },
	  director: {
		type: Sequelize.STRING,
		notNull: true,
	  },
	  year: {
		type: Sequelize.INTEGER,
		notNull: true,
	  },
	  length_minutes: {
		type: Sequelize.INTEGER,
		notNull: true,
	  }
	});
  
	return Movie;
  };