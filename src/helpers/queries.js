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

// export const login = (usuario) => {
//   if (
//     usuario.email === userAdmin.email &&
//     usuario.password === userAdmin.password
//   ) {
//     sessionStorage.setItem("loginVermontRestaurant", JSON.stringify(usuario.email));
//     return true;
//   } else {
//     return false;
//   }
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
      return respuesta.json(); 
    } else {
      throw new Error(`Error al iniciar sesión: ${respuesta.statusText}`);
    }
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
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
