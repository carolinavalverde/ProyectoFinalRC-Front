import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers/queries";
import "../../styles/CarritoPedidos.css";

const CarritoPedidos = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const cargarProductoEnCarrito = async () => {
      const respuesta = await obtenerProducto(id);
      if (respuesta.status === 200) {
        const productoObtenido = await respuesta.json();
        setProducto(productoObtenido);
      } else {
        console.error("Error al cargar el producto:", respuesta.statusText);
      }
    };

    cargarProductoEnCarrito();

    return () => {
      // Limpiar efectos si es necesario
    };
  }, [id]);

  const agregarAlCarrito = () => {
    console.log("Producto agregado al carrito:", producto);
    // Implementa la lógica para agregar producto al carrito aquí
  };

  return (
    <Container>
      <h2 className="my-3 text-center">Carrito de Compras</h2>
      <Table
        striped
        bordered
        hover
        className="m-auto mt-5 text-center"
        responsive
      >
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{producto.nombreProducto}</td>
            <td>{producto.descripcion_breve}</td>
            <td>${producto.precio}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <p className="my-3 me-1 p-2 bg-light border border-secondary">
          Total: ${producto.precio}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary my-2" onClick={agregarAlCarrito}>
          Agregar al Carrito
        </button>
      </div>
    </Container>
  );
};

export default CarritoPedidos;
