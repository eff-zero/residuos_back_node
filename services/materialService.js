const DB = require('../data/data')

const getOperarios = () => {
  const operarios = DB.operarios
  return operarios.map((el) => el.nombre)
}

const getLineas = () => {
  const lineas = DB.referencias_material
  return Object.keys(lineas)
}

const getReferencias = (linea) => {
  const referencias = DB.referencias_material[linea]
  return referencias.map((el) => `${el.cod}|${el.ref}`)
}

const getEstado = () => DB.estados_material

module.exports = { getOperarios, getLineas, getReferencias, getEstado }
