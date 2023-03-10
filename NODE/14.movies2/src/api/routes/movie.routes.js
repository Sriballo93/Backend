const express = require("express");

const MoviesRoutes = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
} = require("../controllers/movies.controller");

MoviesRoutes.get("/", getAllMovies);
MoviesRoutes.get("/:id", getMovieById);
MoviesRoutes.post("/", createMovie);
MoviesRoutes.put("/:id", updateMovieById);
MoviesRoutes.delete("/:id", deleteMovieById);

module.exports = MoviesRoutes;
