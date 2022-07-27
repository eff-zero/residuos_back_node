const { referencias_material, operarios, lineas } = require('../data/data')

const getOperarios = (req, res) => {
  res.send(operarios.operarios)
}

const getReferencias = (req, res) => {
  const linea = req.params.linea
  res.send(referencias_material[linea])
}

const getLineas = (req, res) => {
  res.send(lineas)
}

module.exports = { getOperarios, getReferencias, getLineas }
