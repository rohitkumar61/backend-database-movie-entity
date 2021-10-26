const pg = require("pg");
const dbConfig = require("../config/db.config.js");
const {Client} = require("pg")


// Create a connection to the database

const conString = `postgres://${DB_URL}` //Can be found in the Details page

const client = new pg.Client(conString);

client.connect()

