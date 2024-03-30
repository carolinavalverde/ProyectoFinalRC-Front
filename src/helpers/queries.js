const APIProductos = import.meta.env.VITE_API_PRODUCTO;


//POST
export const crearProducto = async (productoNuevo) => {
    try {
      const respuesta = await fetch(APIProductos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoNuevo),
      });
     
      return respuesta;
    } catch (error) {
     
    }
  };