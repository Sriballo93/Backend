const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Se ha podido conectar con la DB: ${name} en el ${host}`);
  } catch (error) {
    console.log(`No se ha podido conectar`, error);
  }
};

module.exports = connect;
