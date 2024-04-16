import "../../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPage from "./CarouselPage";
import CardProducto from "./CardProducto";
import { Container, Row } from "react-bootstrap";
import { leerProductos } from "../../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NuestrosProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const respuesta = await leerProductos();
            if (respuesta.status === 200) {
                const datos = await respuesta.json();
                setProductos(datos);
            } else {
                throw new Error("Error en la solicitud");
            }
        } catch (error) {
            Swal.fire({
                title: "Ocurrió un error",
                text: `No se pueden obtener los productos. Intente esta operación en unos minutos.`,
                icon: "error",
            });
        }
    };

    return (
        <div>
            <div className="itemsContainer">
                <hr />
                <CarouselPage />
                <hr />
                <Container className="mt-5">
                    <h1 className="display-4 text-center">Nuestros Productos</h1>
                    <hr />
                    <Row>
                        {productos.map((producto) => (
                            <CardProducto key={producto.id} producto={producto} />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NuestrosProductos;