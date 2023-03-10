const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./utils/connect");
const ActorRoutes = require("./api/routes/actor.routes");
const MoviesRoutes = require("./api/routes/movie.routes");

dotenv.config();

const PORT = process.env.PORT || 8081;

const server = express();
connect();

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

server.use("/api/v1/movies", MoviesRoutes);
server.use("/api/v1/actors", ActorRoutes);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected Error");
});

server.disable("x-powered-by");

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// .then(() => {
//   console.log("Successfully connected to database");

//   server.get("/", (req, res) => res.send("Welcome to the api"));

//   server.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
//   });
// })
// .catch((error, req, res) => {
//   console.log(error.message);
//   res.status(500).send("Something went wrong");
// });
