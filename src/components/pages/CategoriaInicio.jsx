// import React from "react";
// import '../../styles/CategoriaInicio.css'

// const CategoriaInicio = (props) => {

//     const { title, backgroundImage } = props;

//     const backgroundStyles = {
//         backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center center',
//         backgroundRepeat: 'no-repeat'
//     };

//     return (
//         <div className="categoria" style={backgroundStyles}>
//             <h2>{title}</h2>
//             <button className="btn"> Ver más
//             </button>
//         </div>
//     )
// }

// export default CategoriaInicio;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CategoriaInicio.css";

const CategoriaInicio = (props) => {
    const { title, backgroundImage, categoryId } = props;
    const navigate = useNavigate(); // Obtener la función navigate

    const backgroundStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    // Función para manejar el clic en el botón "Ver más" y redirigir a la página de la categoría por ID
    const handleVerMasClick = (categoryId) => {
        navigate(`/categorias/${categoryId}`);
    };

    return (
        <div className="categoria" style={backgroundStyles}>
            <h2>{title}</h2>
            {/* Llama a la función handleVerMasClick con la categoryId cuando se hace clic en el botón */}
            <button className="btn" onClick={() => handleVerMasClick(categoryId)}> Ver más </button>
        </div>
    );
};

export default CategoriaInicio;


