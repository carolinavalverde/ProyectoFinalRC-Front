// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MenuCategorias from "./components/pages/MenuCategorias";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "bootstrap";
import CarouselPage from "./components/pages/CarouselPage";

function App() {

  return (
    <div>
      <CarouselPage></CarouselPage>
      <hr />
      <MenuCategorias title="Entradas" />
      <hr />
      <h2>Platillos</h2>
      <MenuCategorias title="Entradas" />
      <hr />

      <h2>Bebidas</h2>
      <MenuCategorias title="Entradas" />
      <hr />

      <h2>Postres</h2>
      <MenuCategorias title="Entradas" />
    </div>
  )

}

export default App;


// import Footer from "./components/common/Footer";
// import Menu from "./components/common/Menu";
// import Error404 from "./components/pages/Error404";
// import Administrador from "./components/pages/Administrador";
// import Inicio from "./components/pages/Inicio";
// import FormularioProducto from "./components/pages/producto/FormularioProducto";
// import DetalleProducto from "./components/pages/DetalleProducto";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Registro from "./components/pages/Registro";
// import Login from "./components/pages/Login";
// import RutasProtegidas from "./components/routes/RutasProtegidas";
// import RutasAdmin from "./components/routes/RutasAdmin";
// import { useState } from "react";







  // const usuario =
  //   JSON.parse(sessionStorage.getItem("loginVermontRestaurant")) || "";
  // const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  // return (
    // <BrowserRouter>
    //   <Menu
    //     usuarioLogueado={usuarioLogueado}
    //     setUsuarioLogueado={setUsuarioLogueado}
    //   ></Menu>
    //   <Routes>
    //     <Route path="/" element={<Inicio></Inicio>}></Route>
    //     <Route
    //       path="/detalleproducto/:id"
    //       element={<DetalleProducto></DetalleProducto>}
    //     ></Route>
    //     <Route
    //       exact
    //       path="/login"
    //       element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
    //     ></Route>
    //      <Route path="/registro" element={<Registro></Registro>}></Route>
    //     <Route
    //       exact
    //       path="/administrador/*"
    //       element={
    //         <RutasProtegidas>
    //           <RutasAdmin></RutasAdmin>
    //         </RutasProtegidas>
    //       }
    //     ></Route>
    //     <Route path="*" element={<Error404></Error404>}></Route>
    //   </Routes>
    //   <Footer></Footer>
    // </BrowserRouter>
  // );
