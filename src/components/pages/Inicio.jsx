import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Inicio.css";
import CategoriaInicio from "./CategoriaInicio";

import platillosImage from "../assets/img/platillos1.avif";
import bebidasImage from "../assets/img/bebidas1.jpg";
import postresImage from "../assets/img/postres1.avif";

const Inicio = () => {
  return (
    <section>
      <div className="contenedorRestaurantVermont">
        <div className="display-3">Restaurant Vermont</div>
        <Link className="btnNuestrosProductos" to="/nuestrosproductos">
          Nuestros Productos
        </Link>
      </div>
      <div>
        <section className="imgCategoriaEntradas">
          <div  />
          <div className="textoImgCategoria text-center mb-2">Entradas</div>
        </section>
        <div title="Platillos" backgroundImage={platillosImage} />
        <CategoriaInicio title="Bebidas" backgroundImage={bebidasImage} />
        <CategoriaInicio title="Postres" backgroundImage={postresImage} />
      </div>
    </section>
  );
};

export default Inicio;
