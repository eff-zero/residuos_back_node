import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  // AQUI VAN LAS FUNCIONES JS
  res.send('HOLA DESDE EXCEDENTES')
})

export default router
