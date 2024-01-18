"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;
require("reflect-metadata");
require("../../container");
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _dataSource = require("../typeorm/data-source");
var _routes = require("./routes");
var _appErrorHandler = require("./middlewares/appErrorHandler");
var _ws = _interopRequireDefault(require("ws"));
var _http = _interopRequireDefault(require("http"));
var _webSocketService = _interopRequireDefault(require("../../../modules/websockets/webSocketService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
const server = exports.server = _http.default.createServer(app);
const io = new _ws.default.Server({
  server
});
_dataSource.AppDataSource.initialize().then(async () => {
  console.log('successfully connected to the database');
}).catch(error => console.log(error.message));
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.router);
app.use(_appErrorHandler.appErrorHandler);
const webSocketService = new _webSocketService.default(server);