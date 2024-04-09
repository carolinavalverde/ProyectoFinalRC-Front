import "../../../App.css";
import MenuCategorias from "./MenuCategorias"
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from "./CarouselPage";
import CardProducto from "./CardProducto";
import { Container, Row } from "react-bootstrap";
import { leerProductos } from "../../../helpers/queries";
import { useEffect, useState, React } from "react";

const NuestrosProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //solicitar a la api traer los productos
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        const respuesta = await leerProductos();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos);
        } else {
            //mostrar un mjs elegante de error al usuario de q en este momento no puede hacer esta transaccion
        }
    };

    console.log(productos);


    return (

        <div>
            <div className="itemsContainer">
                <hr />

                <CarouselPage></CarouselPage>
                <hr />

                {/* <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Entradas</h2>
                <MenuCategorias />
                <hr />
                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Platillos</h2>
                <MenuCategorias />
                <hr />

                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Bebidas</h2>
                <MenuCategorias />
                <hr />

                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Postres</h2>
                <MenuCategorias /> */}
                <Container className="mt-5">
                    <h1 className="display-4">Nuestros Productos</h1>
                    <hr />

                    <Row>
                        {productos.slice(0, 3).map((producto) => (
                            <CardProducto key={producto._id} producto={producto}></CardProducto>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default NuestrosProductos;