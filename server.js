const express = require("express");
const cors = require("cors");
require("dotenv").config()
const db = require("./app/models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let corsOptions = {
	origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));
db.sequelize.sync();

db.sequelize.sync().then(() => {
	console.log("re-sync db.");
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to movie application." });
});

require("./app/routes/movie.routes")(app);
require("./app/routes/shows.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




