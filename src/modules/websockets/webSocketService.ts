import WebSocket from 'ws';
import http from 'http'

class WebSocketService {
  private wss: WebSocket.Server;

  constructor(server: http.Server) {
    this.wss = new WebSocket.Server({ server });
    this.setupWebSocket();
  }

  private setupWebSocket() {
    this.wss.on('connection', (socket) => {
      console.log('WebSocket connection established');

      socket.on('message', (message) => {
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

export default WebSocketService;
