import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'

dotenv.config()

const app = express()
const server = createServer(app)
const PORT = process.env.SOCKET_SERVER_PORT

server.listen(PORT, () => console.log(`socket server is running on port: ${PORT}`))

export default server
