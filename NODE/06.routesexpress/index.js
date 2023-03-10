const express = require("express");

const PORT = 3000;
const server = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello students!");
});

router.get("/movies", (req, res) => {
  const movies = ["Harry Potter", "Titanic", "Back to the Future"];
  res.send(movies);
});

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server is running in the  http://localhost:${PORT}`);
});
