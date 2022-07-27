const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)
const webSocket = require('ws')

const excedentesRoutes = require('./routes/excedentes.js')
const materialRoutes = require('./routes/material.js')

const wss = new webSocket.Server({ server: server })
const socketClient = require('./helpers/netSocket')

// RECEPCION Y ENVIO SOCKET-WEBSOCKET (1 - CANAL)
wss.on('connection', (ws) => {
  socketClient.on('data', (data) => {
    console.log(data)
    ws.send(JSON.stringify(data)) // ENVÍO AL CLIENTE REACT
  })
})

// CORS Y JSON
app.use(cors())
app.use(express.json())

// RUTAS
app.use('/material', materialRoutes)
app.use('/excedentes', excedentesRoutes)

// MENSAJE DE INICIO
app.get('/', (req, res) => {
  res.send('SERVIROR DE RESIDUOS: NODE EXPRESS')
})

// ARRANQUE DEL SERVIDOR
server.listen(5000, () => console.log(`:: http://localhost:5000 ::`))
