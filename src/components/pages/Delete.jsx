import React from "react";

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