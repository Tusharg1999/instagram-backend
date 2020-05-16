const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("../api/routes");
const applicationTokenInterceptor = require('../api/middlewares/appliationTokenInterceptor');

module.exports = async function expressLoader(app) {
  app.use(cors());
  app.use(helmet());
  app.use(express.static("uploads"))
  app.use(applicationTokenInterceptor);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(routes);
};
