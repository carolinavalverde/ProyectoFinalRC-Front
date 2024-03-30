const APIProductos = import.meta.env.VITE_API_PRODUCTO;

console.log(APIProductos);

export const crearProducto = async (productoNuevo) => {
    try {
      const respuesta = await fetch(APIProductos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoNuevo),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
