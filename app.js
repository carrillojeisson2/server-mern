const express = require("express");

const app = express();
const { API_VERSION } = require("./config");

// load routings
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");

app.use(express.json());

// configure header http

// router basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
