"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topicRoutes = void 0;
var _createTopicController = require("../../../../modules/accounts/useCases/topicUseCases/createTopic/createTopicController");
var _deleteTopicController = require("../../../../modules/accounts/useCases/topicUseCases/deleteTopic/deleteTopicController");
var _showTopicController = require("../../../../modules/accounts/useCases/topicUseCases/showTopic/showTopicController");
var _showTopicsController = require("../../../../modules/accounts/useCases/topicUseCases/showTopics/showTopicsController");
var _express = require("express");
const topicRoutes = exports.topicRoutes = (0, _express.Router)();
topicRoutes.get("/", _showTopicsController.showTopicsController.handle);
topicRoutes.post("/", _createTopicController.createTopicController.handle);
topicRoutes.get("/:id", _showTopicController.showTopicController.handle);
topicRoutes.delete("/:id", _deleteTopicController.deleteTopicController.handle);