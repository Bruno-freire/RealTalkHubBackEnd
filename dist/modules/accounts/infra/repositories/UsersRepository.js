"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;
var _dataSource = require("../../../../shared/infra/typeorm/data-source");
var _user = require("../entities/user");
class UserRepository {
  constructor() {
    this.userRepository = void 0;
    this.userRepository = _dataSource.AppDataSource.getRepository(_user.User);
  }
  async showUsers() {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async createUser(data) {
    try {
      return await this.userRepository.save(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updatedUser(user) {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async findByEmail(email) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email
        }
      });
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async findById(id) {
    try {
      return await this.userRepository.findOne({
        where: {
          id
        }
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
exports.UserRepository = UserRepository;