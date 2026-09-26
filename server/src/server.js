import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('¡La puerta está abierta y el servidor funciona!');
});


app.listen(PORT, () => {
  console.log(`🚪 Servidor escuchando en http://localhost:${PORT}`);
});