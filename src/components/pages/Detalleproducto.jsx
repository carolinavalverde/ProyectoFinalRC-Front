import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProducto } from "../../helpers/queries";
import { Container, Button } from "react-bootstrap";

const Detalleproducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const cargarProductoEnFormulario = async () => {
      const respuesta = await obtenerProducto(id);
      if (respuesta.status === 200) {
        const productoBuscado = await respuesta.json();
        setProducto(productoBuscado);
      }
    };

    cargarProductoEnFormulario();
  }, [id]);

  const handleComprar = () => {
    const productosEnCarrito =
      JSON.parse(localStorage.getItem("carrito")) || [];
    productosEnCarrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
    alert("Producto agregado al carrito");
    navigate("/carritopedidos"); 
  };

  return (
    <Container className="body my-3">
      <div className="d-flex">
        <div className="justify-content-center text-center">
          <h1 className="text-center my-2 display-4 fw-bold">
            {producto.nombreProducto}
          </h1>
          <p className="w-75 m-auto py-3 display-6">
            {producto.descripcion_breve}
          </p>
          <div className="containerImagen ">
            <img
              src={producto.imagen}
              className="img-fluid rounded border-3 col-8"
              alt={producto.nombreProducto}
            />
          </div>
          <p className="w-75 m-auto py-3 lead">{producto.descripcion_amplia}</p>
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-success display-6"
              onClick={handleComprar}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detalleproducto;
