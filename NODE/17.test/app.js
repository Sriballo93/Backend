const express = require("express");

const router = require("./src/api/routes/birras.routes");

const app = express();

app.use(express.json());

app.use(router);
//Hacemos un post con respuesta
module.exports = app;
