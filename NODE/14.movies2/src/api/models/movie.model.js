const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    year: {
      type: Date,
      default: 2023,
      required: false,
      trim: true,
      validate: {
        validator: (v) =>
          v instanceof Date &&
          v.getFullYear() >= 1900 &&
          v.getFullYear() <= 2100,
        message: "Year between 1900 & 2100",
      },
    },
    actors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Actor", required: true },
    ],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
