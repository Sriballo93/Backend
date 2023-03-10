const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ActorModel = mongoose.model("Actor", ActorSchema);

module.exports = ActorModel;
