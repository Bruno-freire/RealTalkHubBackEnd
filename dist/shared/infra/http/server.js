"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
require("reflect-metadata");
var _app = require("./app");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const port = process.env.PORT || 3333;
_app.server.listen(port || 3333, () => console.log(`Server is running! port ${port}`));