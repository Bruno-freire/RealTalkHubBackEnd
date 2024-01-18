"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTopicUseCase = void 0;
var _tsyringe = require("tsyringe");
var _ITopicsRepository = require("../../../interfaces/ITopicsRepository");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteTopicUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TopicsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ITopicsRepository.ITopicsRepository === "undefined" ? Object : _ITopicsRepository.ITopicsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteTopicUseCase {
  constructor(topicsRepository) {
    this.topicsRepository = topicsRepository;
  }
  async execute(id) {
    try {
      return await this.topicsRepository.deleteTopic(id);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}) || _class) || _class) || _class) || _class);
const deleteTopicUseCase = exports.deleteTopicUseCase = _tsyringe.container.resolve(DeleteTopicUseCase);