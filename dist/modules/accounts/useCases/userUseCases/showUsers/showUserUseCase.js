"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUserUseCase = void 0;
var _IUserRepository = require("../../../interfaces/IUserRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let ShowUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    try {
      const users = await this.usersRepository.showUsers();
      return users;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}) || _class) || _class) || _class) || _class);
const showUserUseCase = exports.showUserUseCase = _tsyringe.container.resolve(ShowUserUseCase);