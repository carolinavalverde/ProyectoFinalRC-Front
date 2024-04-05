import React, { useEffect } from "react";
import "../../styles/DetalleProducto.css";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers/queries";

const Detalleproducto = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(() => {
    cargarProductoEnFormulario();
  }, []);

  const cargarProductoEnFormulario = async () => {
    const respuesta = await obtenerProducto(id);
    if (respuesta.status === 200) {
      const productoBuscado = await respuesta.json();
      setProducto(productoBuscado);
    }

    return (
      <Container className="body my-3">
        <h2 className="text-center my-2">{producto.nombreProducto}</h2>

        <p className="w-75 m-auto py-3">
        {producto.descripcion_breve}
        </p>
        <div className="containerImagen ">
          <img
            src={producto.imagen}
            className="img-fluid"
            alt={producto.nombreProducto}
          />
        </div>
        <p className="w-75 m-auto py-3">
         {producto.descripcion_amplia}
        </p>
      </Container>
    );
  };
};
export default Detalleproducto;
