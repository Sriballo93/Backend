const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connect = require("./src/utils/connect");

const {
  configCloudinary,
} = require("./src/api/middlewares/player.middlewares");

const PlayersRoutes = require("./src/api/routes/player.routes");

const UserRoutes = require("./src/api/routes/users.routes");

configCloudinary();
//Dotenv
dotenv.config();
const PORT = process.env.PORT;

//Conection
const server = express();
connect();
//Parser
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));
server.use("/api/v1/players", PlayersRoutes);
server.use("/api/v1/users", UserRoutes);
//Cors
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//Error
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected Error");
});

//No express
server.disable("x-powered-by");

//listen
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
