const express = require("express");

const ActorRoutes = express.Router();

const {
  getAllActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
} = require("../controllers/actors.controller");

ActorRoutes.get("/", getAllActors);
ActorRoutes.get("/:id", getActorById);
ActorRoutes.post("/", createActor);
ActorRoutes.put("/:id", updateActorById);
ActorRoutes.delete("/:id", deleteActorById);

module.exports = ActorRoutes;
