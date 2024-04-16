import React from "react";
import "../../styles/CategoriaInicio.css";

const CategoriaInicio = (props) => {
  const { title, backgroundImage } = props;

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="categoria" style={backgroundStyles}>
      <h2 className="categoriaH2">{title}</h2>
    </div>
  );
};

export default CategoriaInicio;
