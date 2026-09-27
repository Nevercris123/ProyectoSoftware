import { Router } from 'express';
import auspiciadorRoutes from './auspiciador.routes.js';

const router = Router();

// Aquí le decimos al servidor que use tus rutas
router.use('/auspiciadores', auspiciadorRoutes);

export default router;