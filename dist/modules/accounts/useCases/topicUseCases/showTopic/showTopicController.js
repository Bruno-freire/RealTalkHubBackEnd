"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTopicController = void 0;
var _tsyringe = require("tsyringe");
var _showTopicUseCase = require("./showTopicUseCase");
var _dec, _class;
let ShowTopicController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ShowTopicController {
  async handle(request, response, next) {
    try {
      const {
        id
      } = request.params;
      const topic = await _showTopicUseCase.showTopicUseCase.execute(id);
      return response.status(200).json(topic);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const showTopicController = exports.showTopicController = _tsyringe.container.resolve(ShowTopicController);