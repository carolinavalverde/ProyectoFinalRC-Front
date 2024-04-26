const APIProductos = import.meta.env.VITE_API_PRODUCTO;
//const APIProductos = process.env.VITE_API_PRODUCTO;
console.log(APIProductos);

const APIUsuarios = import.meta.env.VITE_API_USUARIO;
//const APIUsuarios = process.env.VITE_API_USUARIO;
console.log(APIUsuarios);

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
    console.log(usuario);
    const respuesta = await fetch(APIUsuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    if (respuesta.ok) {
      const data = await respuesta.json();
      sessionStorage.setItem("loginVermontRestaurant", JSON.stringify(data));
      return data;
    } else {
      const error = await respuesta.json();
      throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};

//para usuarios
export const registrarUsuario = async (usuario) => {
  console.log("Datos del usuario que estás tratando de registrar:", usuario);

  try {
    const respuestaListaUsuarios = await fetch(APIUsuarios);
    const listaUsuarios = await respuestaListaUsuarios.json();
    console.log("Lista de usuarios:", listaUsuarios);

    const usuarioExistente = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    console.log("Usuario existente:", usuarioExistente);

    if (usuarioExistente) {
      throw new Error("Ya existe un usuario con el correo enviado");
    }

    const respuestaRegistro = await fetch(APIUsuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    console.log(
      "Respuesta del servidor al registrar el usuario:",
      respuestaRegistro
    );

    // Si la respuesta es un error, lanzar un error
    if (!respuestaRegistro.ok) {
      const error = await respuestaRegistro.json();
      console.error("Error en la respuesta del servidor:", error); // Mostrar la respuesta completa del servidor
      throw new Error(
        error.mensaje || "Error desconocido al registrar el usuario"
      );
    }

    const data = await respuestaRegistro.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al registrar el usuario");
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
