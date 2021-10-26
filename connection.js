const pg = require("pg");
require("dotenv").config()


const DB_URL =  process.env.DB_URL


// Create a connection to the database

const conString = DB_URL 
const client = new pg.Client(conString);

module.exports = client

