const mongoose = require("mongoose");

const Character = require("../models/Character");

const characters = [
  {
    name: "Ursula Corberó",
    age: 32,
    alias: "Tokio",
  },
  {
    name: "Pedro Alonso",
    age: 50,
    alias: "Berlín",
  },
  {
    name: "Álvaro Morte",
    age: 46,
    alias: "Profesor",
  },
  {
    name: "Alba Flores",
    age: 34,
    alias: "Nairobi",
  },
  {
    name: "Jaime Lorente",
    age: 29,
    alias: "Denver",
  },
  {
    name: "Darko Peric",
    age: 44,
    alias: "Helsinki",
  },
];

const characterDocuments = characters.map(
  (character) => new Character(character)
);

const MONGO_URI =
  "mongodb+srv://sriballo93:123Minineed.@cluster0.gm3tzzy.mongodb.net/thehouse?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharacters = await Character.find();
    if (allCharacters.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Character.insertMany(characterDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
