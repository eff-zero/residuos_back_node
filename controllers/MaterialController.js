const materialService = require('../services/materialService')

const getOperarios = (req, res) => {
  const operarios = materialService.getOperarios()
  res.send(operarios)
}

const getReferencias = (req, res) => {
  const linea = req.params.linea
  const referencias = materialService.getReferencias(linea)
  res.send(referencias)
}

const getLineas = (req, res) => {
  const lineas = materialService.getLineas()
  res.send(lineas)
}

const getEstado = (req, res) => {
  const estados = materialService.getEstado()
  res.send(estados)
}

module.exports = { getOperarios, getReferencias, getLineas, getEstado }
