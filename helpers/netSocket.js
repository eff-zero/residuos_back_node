const net = require('net')
const netServer = net.createServer()

const port = 4200

/**
 * Funcion para no tumbar servidor con
 * on('error') - manejo de erroress
 */
const socketServer = netServer.listen(port)

module.exports = socketServer
