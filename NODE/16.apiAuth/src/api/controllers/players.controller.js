const Player = require("../models/player.model");

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await Player.find();
    console.log(players);
    return res.status(200).json(players);
  } catch (error) {
    return next(error);
  }
};

const createPlayer = async (req, res, next) => {
  try {
    const newPlayer = new Player({
      ...req.body,
      image: req.file
        ? req.file.path
        : "https://res.cloudinary.com/dg2xjawnt/image/upload/v1678114115/icon-image-not-found-free-vector_kebo3l.webp",
    });
    const createdPlayer = await newPlayer.save();
    return res.status(201).json(createdPlayer);
  } catch (error) {
    return next("Error creating player");
  }
};

module.exports = { getAllPlayers, createPlayer };
