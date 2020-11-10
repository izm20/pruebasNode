const express = require("express");
const app = express();
const users = [{ id: 1, name: "Pepe" }, { id: 2, name: "Juan" }];
const MIN_FACES = 1;
const DEFAULT_FACES = 6;

app.use(express.json());

const  throwDice = (faces = DEFAULT_FACES) => 
  MIN_FACES + Math.floor(Math.random() * faces);

const jsonResponse  = (result, faces = DEFAULT_FACES) => ({
  min: MIN_FACES,
  max: faces,
  result: result
});

app.post('/users', ({body}, res) => {
  const newUser = body;
  newUser.id = throwDice(100);
  users.push(newUser);
  res.json(newUser);
});

app.get('/dice/:faces', ({params}, res) => {
  const faces = Number(params.faces);
  const diceResult = throwDice(faces);
  res.json(jsonResponse(diceResult));
});

app.get('/dice', ({params}, res) => {
  const diceResult = throwDice();
  res.json(jsonResponse(diceResult));
});

app.get('/users/:id', ({params}, res) => {
  const userId = Number(params.id);
  const user = users.find(user => user.id === userId);
  res.json(user);
});

app.get('/users', ({params}, res) => {
  res.json(users);
});

app.get("/test", ({params}, res) => {
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
