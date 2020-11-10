const express = require("express");
const app = express();
const movies = [
  { id: 1, name: "Amenaza fantasma", likes: 0 },
  { id: 2, name: "La piedra filosofal", likes: 1 },
  { id: 3, name: "Spiderman", likes: 1 },
  { id: 4, name: "Batman", likes: 0 }
];

app.use(express.json());

const buildId = () => {
  let id = 1
  if (movies.length > 0) {
    id = movies[movies.length - 1].id + 1
  }
  return id
}

const buildMovie = (id, body, likes = 0) => ({
  id: id,
  ...body,
  likes: likes
});

const findMovieById = (id) => movies.findIndex(movie => movie.id == id);

app.post('/movies', ({body}, res) => {
  const newMovie = buildMovie(buildId, body, 0);
  movies.push(newMovie);
  res.json(newMovie);
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.put('/movies/likes/:id', ({params}, res) => {
  const movieIndex = findMovieById(params.id);
  movies[movieIndex].likes = 1
  res.json(movies[movieIndex]);
});

app.delete('/movies/delete/:id', ({params}, res) => {
  const id = Number(params.id);
  const movieIndex = movies.findIndex(movie => movie.id === id);
  res.json(movies.splice(movieIndex, 1));
});

app.get('/movies/likes', ({params}, res) => {
  res.json(movies.filter(movie => movie.likes == 1));
});

app.get("/", (req, res) => {
  console.log("Request:", req);
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
