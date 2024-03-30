// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
// import Footer from "./components/common/Footer";
// import Menu from "./components/common/Menu";
// import Error404 from "./components/pages/Error404";
// import Administrador from "./components/pages/Administrador";
// import FormularioProducto from "./components/pages/producto/FormularioProducto";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registro from "./components/pages/Registro";
// import Login from "./components/pages/Login";
// import RutasProtegidas from "./components/routes/RutasProtegidas";
// import RutasAdmin from "./components/routes/RutasAdmin";
// import { useState } from "react";

// import Inicio from "./components/pages/Inicio";
import CategoriaInicio from "./components/pages/CategoriaInicio";

function App() {
  return (
    <div>
      <CategoriaInicio title="Entradas" backgroundImage="../src/components/assets/img/entradas1.avif" />
      <CategoriaInicio title="Platillos" backgroundImage="../src/components/assets/img/platillos1.avif"  />
      <CategoriaInicio title="Bebidas" backgroundImage="../src/components/assets/img/bebidas1.jpg"  />
      <CategoriaInicio title="Postres" backgroundImage="../src/components/assets/img/postres1.avif" />
    </div>

  );
}

export default App;
