"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUserController = void 0;
var _showUserUseCase = require("./showUserUseCase");
var _tsyringe = require("tsyringe");
var _dec, _class;
let ShowUserController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ShowUserController {
  async handle(request, response, next) {
    try {
      const users = await _showUserUseCase.showUserUseCase.execute();
      return response.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const showUserController = exports.showUserController = _tsyringe.container.resolve(ShowUserController);