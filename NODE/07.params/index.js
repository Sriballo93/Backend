const express = require("express");
const PORT = 3000;
const server = express();

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello neoland");
});

router.get("/movies", (req, res) => {
  const movies = ["Harry Potter", "Titanic", "Back to the Future"];
  res.send(movies);
});

router.get("/movies/:movie", (req, res) => {
  const nameMovie = req.params.movie;
  const movies = ["Harry Potter", "Titanic", "Back to the Future"];
  const findMovieIndex = movies.indexOf(nameMovie);
  if (findMovieIndex === -1) {
    res.send("No se ha encontrado la pelicula");
  }

  res.send(movies[findMovieIndex]);
  //   else {
  //     res.send(`${nameMovie} se encuentra en el array`);
  //   }
});

router.get("/query", (req, res) => {
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;
  // const {nombre, apellido}= req.query;
  res.send(
    "¡hola mundo! os saluda" +
      nombre +
      " " +
      apellido +
      " deesde GET 2, con Query params"
  );
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
