"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUserUseCase = void 0;
var _IUserRepository = require("../../../../interfaces/IUserRepository");
var _AppError = require("../../../../../../shared/errors/AppError");
var _tsyringe = require("tsyringe");
var _zod = require("zod");
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _dec, _dec2, _dec3, _dec4, _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validationDatas = _zod.z.object({
  email: _zod.z.string().trim().toLowerCase().email(),
  password: _zod.z.string().trim().toLowerCase().min(8).refine(password => (password.match(/\d/g) || []).length >= 2, {
    message: 'The password must contain at least two numbers.'
  }).refine(password => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: 'The password must contain at least one special character.'
  })
});
let LoginUserUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("UsersRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class LoginUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async validateLoginData(email, password) {
    const validatedData = validationDatas.parse({
      email,
      password
    });
    return validatedData;
  }
  async execute(email, password) {
    try {
      const validatedData = await this.validateLoginData(email, password);
      const user = await this.usersRepository.findByEmail(validatedData.email);
      if (!user) {
        throw new _AppError.AppError("User doesn't exist!", 400);
      }
      const isPasswordValid = await _bcrypt.default.compare(validatedData.password, user.password);
      if (!isPasswordValid) {
        throw new _AppError.AppError("Invalid password!", 401);
      }
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}) || _class) || _class) || _class) || _class);
const loginUserUseCase = exports.loginUserUseCase = _tsyringe.container.resolve(LoginUserUseCase);