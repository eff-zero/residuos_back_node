const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // AQUI VAN LAS FUNCIONES JS
  res.send('HOLA DESDE EXCEDENTES')
})

module.exports = router
