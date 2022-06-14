import express from 'express'
import excedentesRoutes from './routes/excedentes.js'
import materialRoutes from './routes/material.js'

const app = express()

// RUTAS
app.use('/material', materialRoutes)
app.use('/excedentes', excedentesRoutes)

// MENSAJE DE INICIO
app.get('/', (req, res) => {
  res.send('SERVIROR DE RESIDUOS: NODE EXPRESS')
})

// ARRANQUE DEL SERVIDOR
app.listen(5000, () => console.log(`http://localhost:5000`))
