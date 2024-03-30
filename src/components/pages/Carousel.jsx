import React from "react";
import platillos1 from '../../components/assets/img/platillos1.avif';
import restaurante2 from '../../components/assets/img/restaurante2.jpg';
import pizzas1 from '../../components/assets/img/pizzas1.jpg';


const CarouselBootstrap = () => {
    return( <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={restaurante2} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={pizzas1} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={platillos1} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        )}

export default CarouselBootstrap;