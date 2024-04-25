const express = require("express"); // import express
const morgan = require("morgan"); // import morgan
const app = express(); // chayj func express
const port = 3000; // chạy prj trên cổng 3000

app.use(morgan("combined"));

//  định nghĩa route
app.get("/home", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
