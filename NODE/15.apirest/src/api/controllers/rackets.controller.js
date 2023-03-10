const Racket = require("../models/racket.model");

const getAllRackets = async (req, res, next) => {
  try {
    const rackets = await Racket.find();
    return res.status(200).json(rackets);
  } catch (error) {
    return next("Error getting all rackets", error);
  }
};

const getRacketById = async (req, res, next) => {
  try {
    const { id } = await req.params;
    const racket = await Racket.findById(id);
    return res.status(200).json(racket);
  } catch (error) {
    return next("Error getting racket by id", error);
  }
};

const createRacket = async (req, res, next) => {
  try {
    const newRacket = new Racket({
      ...req.body,
      image: req.file ? req.file.path : "not image",
    });
    const createracket = await newRacket.save();
    return res.status(201).json(createracket);
  } catch (error) {
    return next("Error creating racket", error);
  }
};

module.exports = {
  getAllRackets,
  getRacketById,
  createRacket,
};
