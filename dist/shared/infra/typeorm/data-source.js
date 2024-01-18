"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const isProduction = process.env.NODE_ENV === 'production';
const AppDataSource = exports.AppDataSource = new _typeorm.DataSource({
  type: 'postgres',
  url: process.env.URL,
  synchronize: true,
  logging: true,
  entities: [isProduction ? "dist/modules/**/infra/entities/**.js" : "src/modules/**/infra/entities/**.ts"]
});