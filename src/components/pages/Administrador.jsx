import { Button, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { leerProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../../styles/Administrador.css';

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
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

  return (
    <section className="container mainSection BgAdmin">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 TituloAdmin">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center TextoAdmin">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
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
    </section>
  );
};

export default Administrador;
