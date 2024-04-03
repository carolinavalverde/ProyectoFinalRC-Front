import React from "react";
import "../../../App.css";
import MenuCategorias from "./MenuCategorias"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from "../Menu/CarouselPage";

const PaginaMenuCategorias = () => {
    return (
        <div>
            <div className="itemsContainer">
                <hr />
                <CarouselPage></CarouselPage>
                <hr />

                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Entradas</h2>
                <MenuCategorias />
                <hr />
                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Platillos</h2>
                <MenuCategorias />
                <hr />

                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Bebidas</h2>
                <MenuCategorias />
                <hr />

                <h2 style={{ fontWeight: '100', fontSize: '3rem', textTransform: 'uppercase' }}>Postres</h2>
                <MenuCategorias />
            </div>
        </div>
    )
}

export default PaginaMenuCategorias;