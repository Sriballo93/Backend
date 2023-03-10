const Movie = require("../models/movie.model");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate("actors");
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate("actors");
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const createdMovie = new Movie(req.body);
    const movieDB = await createdMovie.save();
    return res.status(201).json(movieDB);
  } catch (error) {
    return next(error);
  }
};

const updateMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

const deleteMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
