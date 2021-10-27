module.exports = (sequelize, Sequelize) => {
	const Shows = sequelize.define("shows", {
		movie_name: {
			type: Sequelize.STRING,
			notNull: true,
		  },
		  theatre_name: {
			type: Sequelize.STRING,
			notNull: true,
		  },
		  rating: {
			type: Sequelize.DECIMAL,
			notNull: true,
		  },
		  movie_info: {
			type: Sequelize.TEXT,
		  },
	  
		
	});
  
	return Shows;
  };