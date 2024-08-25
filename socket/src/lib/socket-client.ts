import { Server } from 'socket.io'
import * as Http from 'http'

class SocketClient {
  #io: Server

  constructor(expressServer: Http.Server) {
    if (!expressServer) {
      throw new Error('expreessServer is missing in Constructor')
    }

    this.#io = new Server(expressServer, {
      cors: {
        origin: 'http://localhost:3000',
        credentials: true
      }
    })
    this.#onNewConnection()

    this.#io.on('send_message', (message) => {
      console.log(message)
    })
  }

  #onNewConnection() {
    this.#io.on('connection', (socket) => {
      console.log('a user connected')
    })
  }

  close() {
    this.#io.close()
  }
}

export default SocketClient
