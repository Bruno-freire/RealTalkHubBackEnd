"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTopicsController = void 0;
var _tsyringe = require("tsyringe");
var _showTopicsUseCase = require("./showTopicsUseCase");
var _dec, _class;
let ShowTopicsController = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ShowTopicsController {
  async handle(request, response, next) {
    try {
      const topics = await _showTopicsUseCase.showTopicsUseCase.execute();
      return response.status(200).json(topics);
    } catch (err) {
      next(err);
    }
  }
}) || _class);
const showTopicsController = exports.showTopicsController = _tsyringe.container.resolve(ShowTopicsController);