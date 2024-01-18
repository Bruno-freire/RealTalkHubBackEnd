"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTopicController = void 0;
var _tsyringe = require("tsyringe");
var _deleteTopicUseCase = require("./deleteTopicUseCase");
var _dec, _class;
let DeleteTopicController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class DeleteTopicController {
  async handle(request, response, next) {
    try {
      const {
        id
      } = request.params;
      const topic = await _deleteTopicUseCase.deleteTopicUseCase.execute(id);
      return response.status(200).json(topic);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const deleteTopicController = exports.deleteTopicController = _tsyringe.container.resolve(DeleteTopicController);