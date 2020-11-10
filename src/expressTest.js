const express = require("express");
const app = express();
const users = [{id: 1, name: "Pepe"}, {id: 2, name: "Juan"}];

app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(user => user.id === userId);
  res.json(user);
});

app.get('/users', (req, res) => {
  res.json(users);
});


app.get("/test", (req, res) => {
  users[0].name = "Imar";  
  res.json(users[0]);
});

app.get("/", (req, res) => {
  console.log("Request:", req);
  res.json(users[0]);
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});