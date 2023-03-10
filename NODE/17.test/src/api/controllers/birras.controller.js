const Birra = require("../routes/birras.routes");

// const { store } = require("../models/birras.models");

const getAllBirras = async (req, res, next) => {
  try {
    const allBirras = await Birra.find();
    return res.status(200).json(allBirras);
  } catch (error) {
    return next("Birras not found", error);
  }
};

const createBirra = async (req, res, next) => {
  try {
    const birra = new Birra(req.body);
    // await store({ nombre, marca, grados });
    const createdBirra = await birra.save();
    return res.status(201).json(createdBirra);
  } catch (error) {
    return next("Error creating movie", error);
  }
};

const updateBirra = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBirra = await Birra.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBirra);
  } catch (error) {
    return next(error);
  }
};

const deleteBirra = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBirra = await Birra.findByIdAndDelete(id);
    res.status(204).json(deletedBirra);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllBirras, createBirra, updateBirra, deleteBirra };
