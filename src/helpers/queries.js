const APIProductos = import.meta.env.VITE_API_PRODUCTO;
//const APIProductos = process.env.VITE_API_PRODUCTO;
console.log(APIProductos);

const APIUsuarios = import.meta.env.VITE_API_USUARIO;
//const APIUsuarios = process.env.VITE_API_USUARIO;
console.log(APIUsuarios);

const URLUsuarioGet = import.meta.env.VITE_API_USUARIO_GET;
console.log(URLUsuarioGet);

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
        "x-token": JSON.parse(sessionStorage.getItem("loginVermontRestaurant"))
          .token,
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (productoEditado, id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("loginVermontRestaurant"))
          .token,
      },
      body: JSON.stringify(productoEditado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("loginVermontRestaurant"))
          .token,
      },
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

// para admin
// const userAdmin = {
//   email: "admin@vermontrestaurant.com",
//   password: "Vermont123$",
// };

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuarioGet, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (respuesta.ok) {
      return respuesta.json();
    } else {
      throw new Error(`Error al iniciar sesión: ${respuesta.statusText}`);
    }
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

//para usuarios
export const registrarUsuario = async (usuario) => {
  try {
    const respuestaListaUsuarios = await fetch(URLUsuarioGet);
    console.log(respuestaListaUsuarios);
    const listaUsuarios = await respuestaListaUsuarios.json();
    console.log(listaUsuarios);
    const usuarioExistente = listaUsuarios.usuarios.find(
      (itemUsuario) =>
        itemUsuario.nombreApellido === usuario.nombreApellido ||
        itemUsuario.email === usuario.email
    );
    if (!usuarioExistente) {
      const respuestaRegistro = await fetch(APIUsuarios, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const data = await respuestaRegistro.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const listarUsuarios = async () => {
  try {
    const respuesta = await fetch(APIUsuarios);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(APIUsuarios + "/" + id, {
      method: "DELETE",
      headers: {},
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//para carrito de pedidos
export const crearPedido = async (nuevoPedido) => {
  try {
    const respuesta = await fetch(URLPedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPedido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const leerPedido = async () => {
  try {
    const respuesta = await fetch(APIPedido);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
