import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login.jsx'
// 1. Agregas la importación de tu página
import AuspiciadoresPage from './components/pages/AuspiciadoresPage' // (Ajusta la ruta si moviste la carpeta pages)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Comentas temporalmente el componente de tus compañeros */}
    {/* <Login /> */}
    
    {/* 3. Agregas tu componente para poder verlo */}
    <AuspiciadoresPage />
  </StrictMode>
)