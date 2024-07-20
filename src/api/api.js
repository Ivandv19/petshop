export const buscar = async (url, setData) => {
    // Función asíncrona para recuperar datos de una API
    try {
      // Se realiza la solicitud GET a la URL especificada
      const response = await fetch(`http://localhost:5000${url}`);
  
      // Se comprueba si la respuesta fue exitosa (código de estado 200-299)
      if (!response.ok) {
        throw new Error(`Error HTTP! Código de estado: ${response.status}`);
      }
  
      // Se parsea el cuerpo de la respuesta JSON en un objeto de JavaScript
      const data = await response.json();
  
      // Se actualiza el estado con los datos recuperados
      setData(data);
  
      // Se informa en la consola que la solicitud fue exitosa
      console.log("Datos recuperados correctamente");
    } catch (error) {
      // Se registra un mensaje de error en la consola junto con el objeto de error
      console.error("Error al recuperar datos:", error);
    }
  };