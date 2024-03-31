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


//

//DELETE
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

//GET de un unico producto
export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos + "/"+ id);
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// queries.js

export const editarProducto = async (id, datos) => {
  // Código para editar el producto con el id dado usando los datos proporcionados
};


//cuando tengamos el backend con un login enviar solicitud POST
const userAdmin = {
  email: "admin@rollingcoffee.com",
  password: "123Aa$123",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem("loginRollingCoffee", JSON.stringify(usuario.email));
    return true;
  } else {
    return false;
  }
};

export const registrarUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(APIRegistro, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};