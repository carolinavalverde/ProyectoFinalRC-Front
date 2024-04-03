import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../styles/Nav.css";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("loginVermontRestaurant");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="BgNav">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {
            <section className="LogoNav d-flex align-items-center">
              <i className="bi bi-fire fs-3 me-3"></i>
              <div>
                <span>VERMONT</span>
                <br />
                <span>RESTAURANT</span>
              </div>
            </section>
          }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              <div className="TextoNav">Inicio</div>
            </NavLink>
            <NavLink end className="nav-link" to="/registro">
              <div className="TextoNav">Registro</div>
            </NavLink>
            {usuarioLogueado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  <div className="TextoNav">Administrador</div>
                </NavLink>
                <Button variant="link" className="nav-link" onClick={logout}>
                  logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                <div className="TextoNav">Login</div>
              </NavLink>
            )}
             <NavLink end className="nav-link" to="/carritopedidos">
              <div className="TextoNav"><i className="bi bi-cart"></i></div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
