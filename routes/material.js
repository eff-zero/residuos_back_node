const express = require('express')
const router = express.Router()
const {
  getOperarios,
  getReferencias,
  getLineas,
  getEstado,
} = require('../controllers/MaterialController')

router.get('/operarios/', getOperarios)
router.get('/referencias/:linea', getReferencias)
router.get('/lineas', getLineas)
router.get('/estados', getEstado)

module.exports = router
