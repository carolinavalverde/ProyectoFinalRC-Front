//const APIUsuarios = import.meta.env.VITE_API_USUARIOS;
const APIUsuarios = process.env.VITE_API_USUARIOS;
console.log(APIUsuarios);

export const listarUsuarios = async () => {
  try {
    const respuesta = await fetch(APIUsuarios);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(APIUsuarios + "/" + id, {
      method: "DELETE",
      headers: {
      },
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
