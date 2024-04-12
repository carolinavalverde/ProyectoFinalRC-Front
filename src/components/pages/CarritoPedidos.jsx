import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const CarritoPedidos = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const navegacion = useNavigate();

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

  const handleFinalizarCompra = () => {
    navegacion("/metodosdepago");
  };

  return (
    <Container>
      <h2 className="my-3 text-center display-6">Carrito de Pedidos</h2>
      {productosEnCarrito.length === 0 ? (
        <section className="container d-flex row justify-content-center text-center lead">
          <span>El carrito está vacío.</span>
          <span>Seleccione un producto.</span>
          <img
            className="img-fluid mt-2 mb-4 col-8"
            src="https://images.pexels.com/photos/8702323/pexels-photo-8702323.jpeg"
            alt="imagen carrito vacio"
          />
          <div className="d-flex justify-content-center">
            <Link className="btn btn-success mb-4" to={`/`}>
              Volver al Inicio
            </Link>
          </div>
        </section>
      ) : (
        <Table
          striped
          bordered
          hover
          className="m-auto my-2 text-center"
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
              onClick={handleFinalizarCompra}
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
