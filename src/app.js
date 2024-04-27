const { engine } = require("express-handlebars");
const path = require("path");
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan
const { log } = require("console");
const app = express(); // chayj func express
const port = 3000; // chạy prj trên cổng 3000
const bodyParser = require("body-parser");
const route = require("./routes");

const db = require("./config/db");

// Connect to db
db.connect();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

// HTTP logger
// app.use(morgan("combined"));

// Set the views directory
app.set("views", path.join(__dirname, "views"));

//Template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

//  routes init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
