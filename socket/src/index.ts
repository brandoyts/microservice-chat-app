import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { SendMessage } from './lib/types'

dotenv.config()

const app = express()
const server = createServer(app)
const PORT = process.env.SOCKET_SERVER_PORT

server.listen(PORT, () => console.log(`socket server is running on port: ${PORT}`))

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })

  socket.on('typing', () => {
    socket.emit('typing', 'test')
    console.log('typing')
  })

  socket.on('send_message', (message: SendMessage) => {
    socket.to(message.to).emit('receive_private_message')
    console.log(message)
  })
})

export default server
