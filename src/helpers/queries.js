const APIProductos = import.meta.env.VITE_API_PRODUCTO;
// const APIProductos = process.env.VITE_API_PRODUCTO;
console.log(APIProductos);

export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIProductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

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


export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (productoEditado, id) => {
  try {
      const respuesta = await fetch(api + '/' + id, {
          method: 'PUT',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(productoEditado)

          
      });
      return respuesta;
  } catch (error) {
      console.log(error)
  }
}