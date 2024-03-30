import React from "react";
import '../../styles/CategoriaInicio.css'

const CategoriaInicio = (props) => {

    const { title, backgroundImage } = props;

    const backgroundStyles = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="categoria" style={backgroundStyles}>
            <h2>{title}</h2>
            <button class="btn"> Ver más
            </button>
        </div>
    )
}

export default CategoriaInicio;