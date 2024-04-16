import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const CarritoPedidos = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const navegacion = useNavigate();

  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem("carrito")) || [];

    const productosConCantidadInicializada = productosGuardados.map(
      (producto) => ({
        ...producto,
        cantidad: producto.cantidad || 1,
      })
    );
    setProductosEnCarrito(productosConCantidadInicializada);
  }, []);

  const calcularTotal = () => {
    const total = productosEnCarrito.reduce((total, producto) => {
      return total + Number(producto.precio) * producto.cantidad;
    }, 0);
    return total;
  };

  const eliminarProducto = (index) => {
    Swal.fire({
      title: "¿Está seguro de eliminar el producto del carrito?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevosProductos = [...productosEnCarrito];
        nuevosProductos.splice(index, 1);
        setProductosEnCarrito(nuevosProductos);
        localStorage.setItem("carrito", JSON.stringify(nuevosProductos));
        Swal.fire(
          "¡Eliminado!",
          "El producto ha sido eliminado del carrito.",
          "success"
        );
      }
    });
  };

  const handleFinalizarCompra = () => {
    localStorage.removeItem("carrito");
    navegacion("/metodosdepago");
  };

  return (
    <section>
      <Container>
        <h2 className="my-3 text-center display-6">Carrito de Pedidos</h2>
        {productosEnCarrito.length === 0 ? (
          <section className="container d-flex row justify-content-center text-center lead">
            <span>El carrito está vacío.</span>
            <span>Seleccione un producto.</span>
            <img
              className="img-fluid mt-2 mb-4 col-6 rounded"
              src="https://images.pexels.com/photos/8702323/pexels-photo-8702323.jpeg"
              alt="imagen carrito vacio"
            />
            <div className="d-flex justify-content-center">
              <Link className="btn btn-success mb-4 text-uppercase" to={`/`}>
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
                <th>Descripción</th>
                <th>Precio por Unidad</th>
                <th>Cantidad</th>
                <th>Eliminar producto</th>
              </tr>
            </thead>
            <tbody>
              {productosEnCarrito.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombreProducto}</td>
                  <td>{producto.descripcion_breve}</td>
                  <td>${producto.precio}</td>
                  <td>
                    <select
                      value={producto.cantidad}
                      onChange={(e) => {
                        const nuevosProductos = [...productosEnCarrito];
                        nuevosProductos[index].cantidad = parseInt(
                          e.target.value
                        );
                        setProductosEnCarrito(nuevosProductos);
                        localStorage.setItem(
                          "carrito",
                          JSON.stringify(nuevosProductos)
                        );
                      }}
                    >
                      {[...Array(10).keys()].map((cantidad) => (
                        <option key={cantidad} value={cantidad + 1}>
                          {cantidad + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarProducto(index)}
                    >
                      X
                    </button>
                  </td>
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
            <div className="d-flex justify-content-end my-2">
              <button
                className="btn btn-success my-2 mx-2"
                onClick={() => navegacion("/nuestrosproductos")}
              >
                Agregar más productos
              </button>
              <button
                className="btn btn-primary my-2"
                onClick={handleFinalizarCompra}
              >
                Finalizar compra
              </button>
            </div>
          </div>
        )}
      </Container>
      <div className="w-100 m-0">
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
          alt="Imagen restaurant"
          className="img-fluid hImgCarrito"
        />
      </div>
    </section>
  );
};

export default CarritoPedidos;
