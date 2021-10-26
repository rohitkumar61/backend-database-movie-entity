const express = require("express");
const app = express();
const Joi = require("joi");
const pg = require("pg");


const client = require("./connection");
app.use(express.json());


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Litening on port ${port}`));

client.connect();

