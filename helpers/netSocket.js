const net = require('net')
const client = new net.Socket()

const port = 88
const ip = '10.149.1.55'

const socketClient = client.connect(port, ip, () => {
  console.log('CONEXION SOCKET/TCP: EXITOSA')
})

module.exports = socketClient
