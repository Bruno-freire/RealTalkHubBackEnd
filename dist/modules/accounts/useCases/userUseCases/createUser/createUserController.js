"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserController = void 0;
var _tsyringe = require("tsyringe");
var _createUserUseCase = require("./createUserUseCase");
var _dec, _class;
let CreateUserController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class CreateUserController {
  async handle(request, response, next) {
    const {
      email,
      name,
      password
    } = request.body;
    try {
      const user = await _createUserUseCase.createUserUseCase.execute({
        email,
        name,
        password
      });
      return response.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const createUserController = exports.createUserController = _tsyringe.container.resolve(CreateUserController);