const mongoose = require("mongoose");

const RacketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 1950,
      max: 2023,
    },
    shape: {
      type: String,
      required: false,
      trim: true,
      enum: ["diamond", "round", "teardrop"],
    },
    image: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Racket = mongoose.model("Racket", RacketSchema);

module.exports = Racket;
