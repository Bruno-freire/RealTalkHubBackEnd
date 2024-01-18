"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUserController = void 0;
var _tsyringe = require("tsyringe");
var _loginUserCase = require("./loginUserCase");
var _dec, _class;
let LoginUserController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class LoginUserController {
  async handle(request, response, next) {
    const {
      email,
      password
    } = request.body;
    try {
      const user = await _loginUserCase.loginUserUseCase.execute(email, password);
      return response.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const loginUserController = exports.loginUserController = _tsyringe.container.resolve(LoginUserController);