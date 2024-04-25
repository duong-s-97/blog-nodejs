const { engine } = require("express-handlebars");
const path = require("path");
const express = require("express"); // import express
const morgan = require("morgan"); // import morgan
const app = express(); // chayj func express
const port = 3000; // chạy prj trên cổng 3000

app.use(express.static(path.join(__dirname, "assets")));

// HTTP logger
app.use(morgan("combined"));

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

//  định nghĩa route
app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
