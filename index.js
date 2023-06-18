const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, (err, res) => {
  console.log("Server is listening on port 3000");
});

module.exports = app;
