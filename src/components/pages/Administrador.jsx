import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ItemProducto from "../pages/producto/ItemProducto.jsx";
import ItemUsuario from "../pages/Usuarios/ItemUsuario.jsx";
import { leerProductos } from "../../helpers/queries";
import { listarUsuarios, borrarUsuario } from "../../helpers/queriesUsuario.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../styles/Administrador.css";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerProductos();
    obtenerUsuarios();
  }, []);

  const obtenerProductos = async () => {
    try {
      const respuesta = await leerProductos();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setProductos(datos);
      } else {
        throw new Error("Error al cargar los productos");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await listarUsuarios();
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setUsuarios(datos);
      } else {
        throw new Error("Error al cargar los usuarios");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <section className="container mainSection BgAdmin">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 TituloAdmin">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped hover className="tablaAdmin mt-3 mb-5">
        <thead>
          <tr className="text-center TextoAdmin">
            <th className="filaTituloTabla">Cod</th>
            <th>Producto</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 TituloAdmin">Listado de Usuarios</h1>
      </div>
      <hr />
      <Table responsive striped hover className="tablaAdmin mt-3 mb-5">
        <thead>
          <tr className="text-center TextoAdmin">
            <th>ID</th>
            <th>Nombre y Apellido</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <ItemUsuario
              key={usuario.id}
              usuario={usuario}
              setUsuarios={setUsuarios}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
