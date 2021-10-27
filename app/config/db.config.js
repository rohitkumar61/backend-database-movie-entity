require("dotenv").config({ path: "./../../.env" });

module.exports = {
  URL: process.env.URL,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
