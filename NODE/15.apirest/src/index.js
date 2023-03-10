const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./utils/connect");
const RacketsRoutes = require("./api/routes/racket.route");
const BrandsRoutes = require("./api/routes/brand.route");
const { configCloudinary } = require("./api/middlewares/files.middleware");

configCloudinary();
dotenv.config();

const PORT = process.env.PORT;

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

server.use("/api/v1/rackets", RacketsRoutes);
server.use("/api/v1/brands", BrandsRoutes);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

server.disable("x-powered-by");

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
