const express = require("express");

const UserRoutes = express.Router();

const { registerUser, loginUser } = require("../controllers/user.controller");

UserRoutes.post("/login", loginUser);
UserRoutes.post("/register", registerUser);

module.exports = UserRoutes;
