const express = require("express");
const { isAuth } = require("../middlewares/user.middlewares");

const PlayersRoutes = express.Router();

const { upload } = require("../middlewares/player.middlewares");

const {
  getAllPlayers,
  createPlayer,
} = require("../controllers/players.controller");

PlayersRoutes.get("/", [isAuth], getAllPlayers);
PlayersRoutes.post("/", upload.single("image"), createPlayer);

module.exports = PlayersRoutes;
