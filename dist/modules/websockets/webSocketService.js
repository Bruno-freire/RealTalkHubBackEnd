"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ws = _interopRequireDefault(require("ws"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class WebSocketService {
  constructor(server) {
    this.wss = void 0;
    this.wss = new _ws.default.Server({
      server
    });
    this.setupWebSocket();
  }
  setupWebSocket() {
    this.wss.on('connection', socket => {
      console.log('WebSocket connection established');
      socket.on('message', message => {
        console.log(`Received message: ${message}`);
      });
      socket.on('close', () => {
        console.log('WebSocket connection closed');
      });
    });
  }

  //   public sendMessageToClient(clientId: string, message: string) {
  //     const client = this.wss.clients.find((client) => client.id === clientId);

  //     if (client) {
  //       client.send(message);
  //     }
  //   }
}
var _default = exports.default = WebSocketService;