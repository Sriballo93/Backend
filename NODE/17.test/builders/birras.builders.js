module.exports.Builder = {
  birra: ({
    nombre = "my birra",
    marca = "this is a mahou",
    grados = 4,
  } = {}) => ({
    nombre,
    marca,
    grados,
  }),
};
