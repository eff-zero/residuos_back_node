const net = require('net')
const client = new net.Socket()

const port = 88
const ip = '192.168.5.241'

/**
 * Funcion para no tumbar servidor con
 * on('error') - manejo de errores
 */

const socketClient = client
  .connect(port, ip, () => console.log('CONEXION SOCKET/TCP: EXITOSA'))
  .on('error', () => console.log('CONEXION SOCKET/TCP: FALLIDA'))

module.exports = socketClient
