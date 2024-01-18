"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserUseCase = void 0;
var _IUserRepository = require("../../../interfaces/IUserRepository");
var _AppError = require("../../../../../shared/errors/AppError");
var _tsyringe = require("tsyringe");
var _zod = require("zod");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validationDatas = _zod.z.object({
  name: _zod.z.string(),
  email: _zod.z.string().trim().toLowerCase().email(),
  password: _zod.z.string().trim().toLowerCase().min(8).refine(password => (password.match(/\d/g) || []).length >= 2, {
    message: 'The password must contain at least two numbers.'
  }).refine(password => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: 'The password must contain at least one special character.'
  })
});
let CreateUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserUseCase {
  constructor(usersRepository
  // @inject("AuthenticationRepository")
  // private authenticationRepository: IAuthenticationRepository
  ) {
    this.usersRepository = usersRepository;
  }
  async validateUserData(data) {
    const validatedData = validationDatas.parse(data);
    return validatedData;
  }
  async checkIfUserExists(email) {
    const existingUser = await this.usersRepository.findByEmail(email);
    if (existingUser) {
      throw new _AppError.AppError("E-mail already registered", 400);
    }
  }
  async hashPassword(password) {
    return _bcrypt.default.hash(password, 10);
  }
  async createUser(data) {
    const user = await this.usersRepository.createUser(data);

    // const authentication = await this.authenticationRepository.createAuthentication(user.id);
    // user.authentication = authentication;
    // await this.usersRepository.updatedUser(user);

    return user;
  }
  async execute(data) {
    try {
      const validatedData = await this.validateUserData(data);
      await this.checkIfUserExists(validatedData.email);
      validatedData.password = await this.hashPassword(validatedData.password);
      const user = await this.createUser(validatedData);
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}) || _class) || _class) || _class) || _class);
const createUserUseCase = exports.createUserUseCase = _tsyringe.container.resolve(CreateUserUseCase);