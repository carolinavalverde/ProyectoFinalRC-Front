import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../../styles/Card.css";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
    return (
        <section className="container my-3">
            <Card className="bg-opacity-25 bg-black border-0">
                <Row className="gx-0">
                    <Col md={4}>
                        <div className="bg-dark bg-opacity-25 d-flex justify-content-center">
                            <img
                                src={producto.imagen}
                                alt={producto.nombreProducto}
                                className="card-img img-fluid imagenCardProducto"
                            />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title className="TituloCardProducto fs-2">{producto.nombreProducto}</Card.Title>
                            <Card.Text className="TextoCardProducto fs-5">Precio: {producto.precio}</Card.Text>
                            <Link
                                className="btn btn-light me-2"
                                to={`/detalleproducto/${producto._id}`}
                            >
                                Ver más
                            </Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </section>
    );
};

export default CardProducto;
