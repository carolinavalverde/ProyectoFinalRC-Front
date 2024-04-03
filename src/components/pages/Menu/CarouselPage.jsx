import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/restaurante1.jpg'
import img2 from '../img/pizzas1.jpg'
import img3 from '../img/postres1.avif'
// import '../../styles/CarouselStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselPage = () => {
    return (
        <div>
            <Carousel style={{ width: '80vw' }}>
                <Carousel.Item>
                    <img style={{ height: '90vh' }}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Vermont, el sabor de la calidad</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '90vh' }}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Vermont, el sabor de la calidad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '90vh' }}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Vermont, el sabor de la calidad</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPage;