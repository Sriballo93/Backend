const express = require("express");

const RacketsRoutes = express.Router();

const { upload } = require("../middlewares/files.middleware");

const {
  getAllRackets,
  getRacketById,
  createRacket,
} = require("../controllers/rackets.controller");

RacketsRoutes.get("/", getAllRackets);
RacketsRoutes.get("/:id", getRacketById);
RacketsRoutes.post("/", upload.single("image"), createRacket);

module.exports = RacketsRoutes;
