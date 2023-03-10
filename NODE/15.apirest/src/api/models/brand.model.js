const mongoose = require("mongoose");

const BrandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: "String",
      trim: true,
      required: true,
    },
    shapes: {
      round: [{ type: mongoose.Schema.Types.ObjectId, ref: "Racket" }],
      diamond: [{ type: mongoose.Schema.Types.ObjectId, ref: "Racket" }],
      teardrop: [{ type: mongoose.Schema.Types.ObjectId, ref: "Racket" }],
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
