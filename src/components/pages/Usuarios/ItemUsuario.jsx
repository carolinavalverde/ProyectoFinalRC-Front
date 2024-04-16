import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarUsuario, listarUsuarios } from "../../../helpers/queriesUsuario";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuario = async () => {
    Swal.fire({
      title: "¿Está seguro de eliminar el usuario?",
      text: "Esta operación no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario eliminado",
            text: `El usuario ${usuario.nombreyapellido} ha sido eliminado correctamente`,
            icon: "success",
          });

          const respuestaNuevosUsuarios = await leerUsuarios();
          if (respuestaNuevosUsuarios.status === 200) {
            const nuevosUsuarios = await respuestaNuevosUsuarios.json();
            setUsuarios(nuevosUsuarios);
          }
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "El usuario no pudo ser eliminado, inténtalo de nuevo más tarde",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr className="tablaAdmin">
      <td className="text-center">{usuario._id}</td>
      <td>{usuario.nombreyapellido}</td>
      <td>{usuario.direccion}</td>
      <td>{usuario.email}</td>
      <td className="text-center">
        <Button variant="danger" onClick={borrarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
