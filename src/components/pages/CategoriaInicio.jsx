import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CategoriaInicio.css";

const CategoriaInicio = (props) => {
    const { title, backgroundImage, categoryId } = props;
    const navigate = useNavigate(); 

    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    const handleVerMasClick = (categoryId) => {
        navigate(`/categorias/${categoryId}`);
    };

    return (
        <div className="categoria" style={backgroundStyles}>
            <h2>{title}</h2>
        </div>
    );
};

export default CategoriaInicio;
