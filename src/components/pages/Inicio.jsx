import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Inicio.css";
import CategoriaInicio from "./CategoriaInicio";

const Inicio = () => {
  return (
    <section>
      <div className="contenedorRestaurantVermont">
        <div className="display-2 text-center mb-2">Restaurant Vermont</div>
        <Link className="btnNuestrosProductos" to="/nuestrosproductos">
          Nuestros Productos
        </Link>
      </div>
      <div>
        <section className="imgCategoriaEntradas">
          <div className="textoImgCategoria text-center display-2">
            Entradas
          </div>
        </section>
        <section className="imgCategoriaPlatillos">
          <div className="textoImgCategoria text-center display-2">
            Platillos
          </div>
        </section>
        <section className="imgCategoriaBebidas">
          <div className="textoImgCategoria text-center display-2">Bebidas</div>
        </section>
        <section className="imgCategoriaPostres">
          <div className="textoImgCategoria text-center display-2">Postres</div>
        </section>
      </div>
    </section>
  );
};

export default Inicio;
