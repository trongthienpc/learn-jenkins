const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api/", (req, res) => {
  res.send("This is a test request");
});

app.listen(3000, (err, res) => {
  console.log("Server is listening on port 3000");
});
