const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("../api/routes");

module.exports = async function expressLoader(app) {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
};
