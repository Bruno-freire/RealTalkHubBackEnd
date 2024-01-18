"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTopicUseCase = void 0;
var _tsyringe = require("tsyringe");
var _ITopicsRepository = require("../../../interfaces/ITopicsRepository");
var _IUserRepository = require("../../../interfaces/IUserRepository");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let CreateTopicUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TopicsRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _ITopicsRepository.ITopicsRepository === "undefined" ? Object : _ITopicsRepository.ITopicsRepository, typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateTopicUseCase {
  constructor(topicsRepository, usersRepository) {
    this.topicsRepository = topicsRepository;
    this.usersRepository = usersRepository;
  }
  async execute(title, content, userID) {
    try {
      const id = userID;
      const user = await this.usersRepository.findById(id);
      return await this.topicsRepository.createTopic(title, content, user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}) || _class) || _class) || _class) || _class) || _class);
const createTopicUseCase = exports.createTopicUseCase = _tsyringe.container.resolve(CreateTopicUseCase);