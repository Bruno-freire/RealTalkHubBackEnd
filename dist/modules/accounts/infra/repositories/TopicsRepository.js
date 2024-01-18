"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopicsRepository = void 0;
var _dataSource = require("../../../../shared/infra/typeorm/data-source");
var _topic = require("../entities/topic");
class TopicsRepository {
  constructor() {
    this.topicRepository = void 0;
    this.topicRepository = _dataSource.AppDataSource.getRepository(_topic.Topic);
  }
  async showTopics() {
    try {
      return await this.topicRepository.find();
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async showTopic(id) {
    try {
      return await this.topicRepository.findOne({
        where: {
          id
        },
        relations: ["messages"]
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createTopic(title, content, user) {
    try {
      return await this.topicRepository.save({
        title,
        content,
        user
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async deleteTopic(id) {
    try {
      const topicDelete = await this.topicRepository.findOne({
        where: {
          id
        }
      });
      await this.topicRepository.delete(id);
      return topicDelete;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
exports.TopicsRepository = TopicsRepository;