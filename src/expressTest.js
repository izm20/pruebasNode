const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Request:", req);
  res.json({saludo: "Hello Wordl!"});
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});