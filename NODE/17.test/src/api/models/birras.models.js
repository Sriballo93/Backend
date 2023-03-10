const mongoose = require("mongoose");

const BirraSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  marca: {
    type: String,
    trim: true,
    required: true,
  },
  grados: {
    type: Number,
    trim: true,
    required: true,
  },
});

const Birra = mongoose.model("Birra", BirraSchema);

module.exports.store = async ({ nombre, marca, grados }) => {
  const birra = new Birra({
    nombre,
    marca,
    grados,
  });
  await birra.save();
  return birra;
};
