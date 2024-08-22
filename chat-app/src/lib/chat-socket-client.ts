import io from "socket.io-client";
import { SendMessage } from "./types";

class ChatSocketClient {
  #socket = io();

  #connect() {}

  onSendMessage(send: SendMessage) {
    this.#socket.emit("SEND_MESSAGE", send);
  }
}

export default ChatSocketClient;
