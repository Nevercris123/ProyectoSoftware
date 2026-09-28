import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import trabajadorRoutes from './routes/trabajador.routes.js'; // nico
import routes from './routes/index.js'; //gene

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Trabajadores y roles
app.use('/api/trabajadores', trabajadorRoutes); // nico
app.use('/api', routes);//gene

//*********************
// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('¡La puerta está abierta y el servidor funciona!');
});


// Nico, manejar errores...
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ mensaje: 'El JSON enviado no es válido' });
  }
  console.error(err);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});
//*****************************



app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});