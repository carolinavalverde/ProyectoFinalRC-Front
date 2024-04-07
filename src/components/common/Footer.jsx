import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="py-3 py-4 BgFooter">
      <div className="container text-center text-md-start">
        <div className="row">
          <section className="col-md-5 col-lg-4 text-center text-lg-start">
            <Link className="nav-link TextoFooter" to="/nosotros">
              <div className="TextoFooter">
                <h5>Acerca de Nosotros</h5>
              </div>
            </Link>
          </section>
          <section className="col-md-4 col-lg-4 TextoFooter text-center">
            <div>
              <h6>CONTACTANOS</h6>
              <p className="TextoFooter">Jueves a Domingos de 20pm a 02am</p>
              <ul className="list-group-item">
                <li className="list-group-item mb-2">
                  <i className="bi bi-telephone-fill"></i> 381-21764295
                </li>
                <li className="list-group-item mb-2">
                  <i className="bi bi-envelope-fill"></i>{" "}
                  vermont.restaurant@gmail.com
                </li>
                <li className="list-group-item mb-2">
                  <i className="bi bi-geo-alt-fill"></i> Gral. Paz 576, San
                  Miguel de Tucumán
                </li>
              </ul>
            </div>
          </section>
          <section className="col-md-3 col-lg-4 TextoFooter">
            <div className="text-end">
              <h5>Seguinos</h5>
              <ul className="list-unstyled">
                <div>
                  <Link to="/error404">
                    <i className="bi bi-instagram fs-4 TextoFooter"></i>
                  </Link>
                  <Link to="/error404" className="mx-2">
                    <i className="bi bi-facebook fs-4 TextoFooter"></i>
                  </Link>
                  <Link to="/error404">
                    <i className="bi bi-twitter fs-4 TextoFooter"></i>
                  </Link>
                </div>
                <section className="LogoNav d-flex align-items-end justify-content-end pt-5">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-fire fs-3 me-3"></i>
                    <div>
                      <span className="d-block">VERMONT</span>
                      <span className="d-block">RESTAURANT</span>
                    </div>
                  </div>
                </section>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
