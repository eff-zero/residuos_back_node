import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('SERVIROR DE RESIDUOS: NODE EXPRESS')
})

app.listen(5000, () => console.log(
  `http://localhost:5000`
))