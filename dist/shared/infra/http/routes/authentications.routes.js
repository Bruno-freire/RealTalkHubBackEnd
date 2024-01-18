"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticationRoutes = void 0;
var _loginUserController = require("../../../../modules/accounts/useCases/userUseCases/authUser/loginUserCase/loginUserController");
var _express = require("express");
// import { loginUserController } from "@modules/accounts/useCases/userUseCases/auth/login/loginUserController";
// import { Router } from "express";

// const authenticationRoutes = Router()

// authenticationRoutes.post("/login", loginUserController.handle)

// export { authenticationRoutes }

const authenticationRoutes = exports.authenticationRoutes = (0, _express.Router)();
authenticationRoutes.post("/login", _loginUserController.loginUserController.handle);