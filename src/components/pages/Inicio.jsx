import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Inicio.css";
import CategoriaInicio from "./CategoriaInicio";

const Inicio = () => {
  return (
    <section>
      <div>
        <div>
          <div>Restaurant Vermont</div>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-success mb-4" to="/nuestrosproductos">
              Nuestros Productos
            </Link>{" "}
          </div>
        </div>
      </div>
      <div>
        <CategoriaInicio
          title="Entradas"
          backgroundImage="../src/components/assets/img/entradas1.avif"
        />
        <CategoriaInicio
          title="Platillos"
          backgroundImage="../src/components/assets/img/platillos1.avif"
        />
        <CategoriaInicio
          title="Bebidas"
          backgroundImage="../src/components/assets/img/bebidas1.jpg"
        />
        <CategoriaInicio
          title="Postres"
          backgroundImage="../src/components/assets/img/postres1.avif"
        />
      </div>
    </section>
  );
};

export default Inicio;
