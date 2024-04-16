import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { borrarProducto, leerProductos } from "../../../helpers/queries";
import { Link } from "react-router-dom";
import "../../../styles/itemProducto.css";

const ItemProducto = ({ producto, setProductos }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar el producto",
      text: "No se puede revertir esta operación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProducto(producto._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,
            icon: "success",
          });

          const respuestaNuevosProductos = await leerProductos();
          if (respuestaNuevosProductos.status === 200) {
            const nuevosProductos = await respuestaNuevosProductos.json();
            setProductos(nuevosProductos);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto ${producto.nombreProducto} no fue eliminado, intente esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  const [estadoSeleccionado, setEstadoSeleccionado] = useState(producto.estado);

  const handleEstado = async (nuevoEstado) => {
    try {
      setEstadoSeleccionado(nuevoEstado);
      // falta la lógica para actualizar el estado del producto en la base de datos...
      // actualiza la lista de productos
      const respuestaNuevosProductos = await leerProductos();
      if (respuestaNuevosProductos.status === 200) {
        const nuevosProductos = await respuestaNuevosProductos.json();
        setProductos(nuevosProductos);
      }
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: `El estado del producto ${producto.nombreProducto} se ha actualizado correctamente.`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <tr className="tablaAdmin">
      <td className="text-center">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>
        <span
          className={`badge bg-${
            estadoSeleccionado === "Pendiente" ? "warning" : "secondary"
          }`}
          onClick={() => handleEstado("Pendiente")}
          style={{ cursor: "pointer", marginRight: "5px" }}
        >
          Pendiente
          {estadoSeleccionado === "Pendiente" && (
            <i className="bi bi-check-square"></i>
          )}
        </span>
        <span
          className={`badge bg-${
            estadoSeleccionado === "Entregado" ? "success" : "secondary"
          }`}
          onClick={() => handleEstado("Entregado")}
          style={{ cursor: "pointer" }}
        >
          Entregado
          {estadoSeleccionado === "Entregado" && (
            <i className="bi bi-check-square"></i>
          )}
        </span>
      </td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail img-fluid lgImg"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={"/administrador/editar/" + producto._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
