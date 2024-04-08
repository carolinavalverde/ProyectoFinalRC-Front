import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

const CarritoPedidos = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("carrito")) || [];
    setProductosEnCarrito(productosGuardados);
  }, []);

  const calcularTotal = () => {
    return productosEnCarrito.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  };

  return (
    <Container>
      <h2 className="my-3 text-center">Carrito de Compras</h2>
      {productosEnCarrito.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
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
            {productosEnCarrito.map((producto, index) => (
              <tr key={index}>
                <td>{producto.nombreProducto}</td>
                <td>{producto.descripcion_breve}</td>
                <td>${producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {productosEnCarrito.length > 0 && (
        <div>
          <div className="d-flex justify-content-end">
            <p className="my-3 me-1 p-2 bg-light border border-secondary">
              Total: ${calcularTotal()}
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary my-2"
              onClick={() =>
                console.log("Implementa la lógica para finalizar la compra")
              }
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CarritoPedidos;
