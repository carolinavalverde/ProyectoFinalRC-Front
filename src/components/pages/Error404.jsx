import React from 'react';
import { Container } from 'react-bootstrap';
import "../../styles/Error404.css";

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
      </Container>
    </main>
            
    
    );
};

export default Error404;