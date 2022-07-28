const routerSocket = (socket, ws) => {
  let ip = socket.remoteAddress.split(':')[3]

  socket.on('data', (data) => {
    switch (ip) {
      case '192.168.5.241':
        const identifier = 'MYPC'
        const dataWithId = `${identifier}|${data.toString()}`
        ws.send(dataWithId)
        break
      default:
        break
    }
  })
}

module.exports = routerSocket

/**
 * Esta función sirve para diferencias
 * que dispositivos está enviando los datos.
 *
 * Al enviar al cliente, se enviar con un
 * identificador. Para setear el estado de
 * ese lado.
 * 
 * VER SI CAMBIAR DE NOMBRE
 *
 */
