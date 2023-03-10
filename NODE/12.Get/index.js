const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/db");

const Character = require("./models/Character");
const PORT = process.env.PORT;

const server = express();
const router = express.Router();

connect();

router.get("/characters", (req, res) => {
  return Character.find()
    .then((characters) => {
      return res.status(200).json(characters);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.get("/characters/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const character = await Character.findById(id);
    if (character) {
      return res.status(200).json(character);
    } else {
      return res.status(404).json("No character found by this id");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/characters/alias/:alias", async (req, res) => {
  const { alias } = req.params;
  try {
    const characterbyAlias = await Character.find({ alias: alias });
    return res.status(200).json(characterbyAlias);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/characters/age/:age", async (req, res) => {
  const { age } = req.params;
  try {
    const characterByAge = await Character.find({ age: { $gt: age } });
    return res.status(200).json(characterByAge);
  } catch (error) {
    return res.status(500).json(error);
  }
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
