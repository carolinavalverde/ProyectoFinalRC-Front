
import React from "react";
import '../../styles/Inicio.css'
import CategoriaInicio from "./CategoriaInicio";

const Inicio = () => {
    return (
        <div>
            <CategoriaInicio title="Entradas" backgroundImage="../src/components/assets/img/entradas1.avif" />
            <CategoriaInicio title="Platillos" backgroundImage="../src/components/assets/img/platillos1.avif" />
            <CategoriaInicio title="Bebidas" backgroundImage="../src/components/assets/img/bebidas1.jpg" />
            <CategoriaInicio title="Postres" backgroundImage="../src/components/assets/img/postres1.avif" />
        </div>)
    
}

export default Inicio;

