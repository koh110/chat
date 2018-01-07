const http = require('http')
const express = require('express')
const WebSocket = require('ws')

const app = express()

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws, req) => {
  ws.isAlive = true
  ws.on('pong', function() {
    this.isAlive = true
  })

  ws.on('message', (message) => {
    wss.clients.forEach((ws) => {
      ws.send(message)
    })
  })


  ws.on('error', (e) => {
    // console.error('err', e)
  })
})

setInterval(() => {
  wss.clients.forEach((ws) => {
    if (ws.isAlive === false) return ws.terminate()

    ws.isAlive = false
    ws.ping('', false, true)
  })
}, 30000)

server.listen(8080, () => {
  console.log('Listening on %d', server.address().port)
})
