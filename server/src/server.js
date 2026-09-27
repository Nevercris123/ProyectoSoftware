import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('¡La puerta está abierta y el servidor funciona!');
});

app.listen(PORT, () => {
  console.log(`📡 Servidor escuchando en http://localhost:${PORT}`);
});