"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accounts = void 0;
var _createUserController = require("../../../../modules/accounts/useCases/userUseCases/createUser/createUserController");
var _showUserController = require("../../../../modules/accounts/useCases/userUseCases/showUsers/showUserController");
var _express = require("express");
const accounts = exports.accounts = (0, _express.Router)();
accounts.get("/", _showUserController.showUserController.handle);
accounts.post("/", _createUserController.createUserController.handle);