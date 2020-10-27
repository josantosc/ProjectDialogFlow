const express = require("express");
const routes = express.Router();
const resultQuery = require("./utils/response");

routes.get("/api", resultQuery);
module.exports = routes