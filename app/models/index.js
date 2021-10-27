const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.URL, {

  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movie.model.js")(sequelize, Sequelize);
db.shows = require("./shows.model.js")(sequelize, Sequelize);


db.movies.hasMany(db.shows, { as: "shows" });
db.shows.belongsTo(db.movies, {
  foreignKey: "movieId",
  as: "movie",
});

module.exports = db;