import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Inicio.css";
import CategoriaInicio from "./CategoriaInicio";
import entradasImage from "../assets/img/entradas1.avif";
import platillosImage from "../assets/img/platillos1.avif";
import bebidasImage from "../assets/img/bebidas1.jpg";
import postresImage from "../assets/img/postres1.avif";

const Inicio = () => {
    return (
        <section>
            <div className="contenedorRestaurantVermont">
                <div>Restaurant Vermont</div>
                <Link
                    className="btnNuestrosProductos"
                    to="/nuestrosproductos"
                >
                    Nuestros Productos
                </Link>
            </div>
            <div>
                <CategoriaInicio
                    title="Entradas"
                    backgroundImage={entradasImage}
                />
                <CategoriaInicio
                    title="Platillos"
                    backgroundImage={platillosImage}
                />
                <CategoriaInicio
                    title="Bebidas"
                    backgroundImage={bebidasImage}
                />
                <CategoriaInicio
                    title="Postres"
                    backgroundImage={postresImage}
                />
            </div>
        </section>
    );
};

export default Inicio;
