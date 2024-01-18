"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTopicController = void 0;
var _tsyringe = require("tsyringe");
var _createTopicUseCase = require("./createTopicUseCase");
var _dec, _class;
let CreateTopicController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class CreateTopicController {
  async handle(request, response, next) {
    try {
      const {
        title,
        content,
        userId
      } = request.body;
      const topic = await _createTopicUseCase.createTopicUseCase.execute(title, content, userId);
      return response.status(200).json(topic);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const createTopicController = exports.createTopicController = _tsyringe.container.resolve(CreateTopicController);