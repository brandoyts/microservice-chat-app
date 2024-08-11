import SocketClient from '../lib/socket-client'
import { describe, beforeEach, jest, test, afterEach, expect } from '@jest/globals'
import { createServer, Server } from 'http'
import * as express from 'express'

// mock the express function
jest.mock('express', () => {
  const mockExpress = jest.fn(() => ({
    use: jest.fn(),
    listen: jest.fn()
  }))
  return mockExpress
})

// mock the createServer function from http
jest.mock('http', () => ({
  createServer: jest.fn(() => ({
    listen: jest.fn(),
    listeners: jest.fn(() => []),
    removeAllListeners: jest.fn(),
    on: jest.fn()
  }))
}))

describe('SocketClient', () => {
  let app: express.Express
  let server: Server
  let socketClient: SocketClient

  beforeEach(() => {
    app = express()
    server = createServer(app)
    socketClient = new SocketClient(server)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should create a new instance of SocketClient', (done) => {
    expect(socketClient).toBeInstanceOf(SocketClient)
    done()
  })
})
