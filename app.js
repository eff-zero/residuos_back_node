require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)
const socketServer = require('./helpers/netSocket')
const routerSocket = require('./helpers/routerSocket')
const webSocket = require('ws')
const wss = new webSocket.Server({ server })

const excedentesRoutes = require('./routes/excedentes.js')
const materialRoutes = require('./routes/material.js')

// RECEPCIÓN Y ENVIO SOCKET-WEBSOCKET (MULTICANAL)
socketServer.on('connection', (socket) => {
  console.log(socket.localAddress)
  wss.on('connection', (ws) => {
    console.log('CONEXION CON CLIENTE DE REACT')
    routerSocket(socket, ws)
  })
})

// CORS Y JSON
app.use(cors())
app.use(express.json())

// RUTAS
app.use('/material', materialRoutes)
app.use('/excedentes', excedentesRoutes)

// MENSAJE DE INICIO (HTTP GET)
app.get('/', (req, res) => {
  res.send('SERVIROR DE RESIDUOS: NODE EXPRESS')
})

// ARRANQUE DEL SERVIDOR
server.listen(5000, () => console.log(`:: http://localhost:5000 ::`))
