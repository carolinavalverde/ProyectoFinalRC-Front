import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../img/restaurante1.jpg";
import img2 from "../../img/pizzas1.jpg";
import img3 from "../../img/postres1.avif";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselPage = () => {
  return (
    <div>
      <Carousel style={{ width: "80vw" }}>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Vermont, el sabor de la calidad</h3>
            <p>Delicias de Vermont, en cada bocado un viaje.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Vermont, el sabor de la calidad</h3>
            <p>
              Sabores auténticos de Vermont, cada plato cuenta una historia.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Vermont, el sabor de la calidad</h3>
            <p>
              Vermont: donde la cocina se encuentra con la naturaleza en cada
              sabor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;