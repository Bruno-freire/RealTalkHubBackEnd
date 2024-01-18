"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var _accounts = require("./accounts.routes");
require("reflect-metadata");
var _authentications = require("./authentications.routes");
var _topicRoutes = require("./topicRoutes");
const router = exports.router = (0, _express.Router)();
router.use("/users", _accounts.accounts);
router.use("/auth", _authentications.authenticationRoutes);
router.use("/topic", _topicRoutes.topicRoutes);