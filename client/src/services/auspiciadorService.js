// client/src/services/auspiciadorService.js

// Traemos la dirección de tu backend desde el archivo .env (http://localhost:3000/api)
// y le agregamos la ruta que creamos ayer
const API_URL = `${import.meta.env.VITE_API_URL}/auspiciadores`;

export const registrarAuspiciador = async (datosAuspiciador) => {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST', // POST es para crear/registrar
      headers: {
        'Content-Type': 'application/json',
      },
      // Convertimos los datos a formato JSON para que el backend los entienda
      body: JSON.stringify(datosAuspiciador), 
    });

    if (!respuesta.ok) {
      throw new Error('Error al conectar con el servidor');
    }

    return await respuesta.json(); // Devolvemos la respuesta exitosa
  } catch (error) {
    console.error("Error en registrarAuspiciador:", error);
    throw error;
  }
};
