import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importar Link desde react-router-dom
import "../../styles/Error.css";

const Error404 = () => {
  return (
    <main className="mainSection main-error">
      <Container>
        <div className="text-center my-5">
          <img
            src="https://media2.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=ecf05e47ngu625ggear5pm8umrg5i33la76ug6hveupdvjid&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="imagen de error 404"
            className="img-fluid"
          />
        </div>
        <div className="d-flex justify-content-center pb-5">
          <Link to="/" className="btn btn-success">
            Volver al Inicio
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Error404;
