import socketIOClient from "socket.io-client";

const SOCKET_URL = "http://192.168.0.25:3030";

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = socketIOClient(SOCKET_URL);
      console.log("initializing socket", this.socket);

      this.socket.on("connect", (data) => {
        console.log("=== socket connected ===");
      });

      this.socket.on("disconnect", (data) => {
        console.log("=== socket disconnected ====");
      });

      this.socket.on("error", (data) => {
        console.log("socket error", data);
      });
    } catch (error) {
      console.log("socket is not inialized", error);
    }
  };

  emit(event, message = "default message") {
    console.log("EMIT");
    console.log(this.socket);
    this.socket.emit(event, message);
  }

  on(event, cb) {
    console.log("LOG ON");
    this.socket.on(event, cb);
  }

  removeListener(listenerName) {
    this.socket.removeListener(listenerName);
  }
}

const socketService = new WSService();

export default socketService;