import React from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import CarritoPedidos from "./components/pages/CarritoPedidos";
import Nosotros from "./components/pages/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/pages/Registro";
import Login from "./components/pages/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";
import PaginaMenuCategorias from "./components/pages/Menu/PaginaMenuCategorias";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import CardProducto from "./components/pages/Menu/CardProducto";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      {/* <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu> */}
      {/* <PaginaMenuCategorias></PaginaMenuCategorias> */}
      <Routes>
        <Route path="/" element={<Inicio></Inicio>}></Route>

        <Route
          path="/carritopedidos"
          element={<CarritoPedidos></CarritoPedidos>}
        ></Route>
        <Route path="/cardproducto" element={<CardProducto></CardProducto>}></Route>
        <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
        <Route
          path="/detalleproducto/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        {/* <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
