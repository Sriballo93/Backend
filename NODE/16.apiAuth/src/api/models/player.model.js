const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: { type: String, required: true, trim: true },
  position: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "foward",
      "left winger",
      "right winger",
      "midfielder",
      "center back",
      "left back",
      "right back",
    ],
  },
});

const Player = new mongoose.model("Player", PlayerSchema);

module.exports = Player;
