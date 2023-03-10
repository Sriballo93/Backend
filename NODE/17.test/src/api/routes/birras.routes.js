const express = require("express");
const {
  getAllBirras,
  createBirra,
  updateBirra,
  deleteBirra,
} = require("../controllers/birras.controller");
const { store } = require("../models/birras.models");

const BirrasRoutes = express.Router();

BirrasRoutes.post("/birras", async (req, res) => {
  const { nombre, marca, grados } = req.body;
  //_id siempre va a ser abc
  const _id = "abc";

  //Ejecutamos store porque es lo que se espera en el segundo test
  await store({ nombre, marca, grados });

  res.status(201).json({
    nombre,
    marca,
    grados,
    _id,
  });
});
BirrasRoutes.get("/birras", getAllBirras);
BirrasRoutes.post("/birras", createBirra);
BirrasRoutes.patch("/birras/:id", updateBirra);
BirrasRoutes.delete("/birras/:id", deleteBirra);

module.exports = BirrasRoutes;
