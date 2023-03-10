const Actor = require("../models/actor.model");

const getAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find();
    return res.status(200).json(actors);
  } catch (error) {
    return next(error);
  }
};

const getActorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findById(id);
    return res.status(200).json(actor);
  } catch (error) {
    return next(error);
  }
};

const createActor = async (req, res, next) => {
  try {
    const newActor = new Actor(req.body);
    const actorDB = await newActor.save();
    return res.status(201).json(actorDB);
  } catch (error) {
    return next(error);
  }
};

const updateActorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateActor = await Actor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateActor);
  } catch (error) {
    return next(error);
  }
};

const deleteActorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteActor = await Actor.findByIdAndDelete(id);
    res.status(200).json(deleteActor);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
};
