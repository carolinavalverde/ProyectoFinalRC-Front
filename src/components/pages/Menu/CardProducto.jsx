import React from "react";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <section className="cardContainer">
      <h1>{producto.nombreProducto}</h1>
      <section className="card">
        <div className="image">
          <img
            src={producto.imagen}
            alt={producto.nombreProducto}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h2 className="title">{producto.nombreProducto}</h2>
          <span className="price">{producto.precio}</span>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            className="btn btn-success me-2"
            to={`/detalleproducto/${producto.id}`}
          >
            Ver más
          </Link>
        </div>
      </section>
    </section>
  );
};

export default CardProducto;
