const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const mongoDb = process.env.MONGO_DB;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conecado a la DB :${name} en el host ${host}`);
  } catch (error) {
    console.log(`No se ha podido conectar a la DB 💔`, error);
  }
};

module.exports = { connect };
