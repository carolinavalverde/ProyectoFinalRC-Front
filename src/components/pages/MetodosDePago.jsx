import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../../styles/MetodosDePago.css";

const MetodosDePago = () => {
  const navigate = useNavigate();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleSeleccionarMetodo = (metodo) => {
    setMetodoSeleccionado(metodo);
  };

  const handleConfirmarPago = () => {
    if (metodoSeleccionado) {
      setTimeout(() => {
        setMostrarModal(true);
      }, 2000);
    } else {
      alert("Por favor, selecciona un método de pago.");
    }
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
    navigate("/");
  };

  return (
    <section className="container mt-5">
      <div className="container mt-5 d-flex pagoTitulo">
        <i className="bi bi-credit-card fs-3"></i>
        <h2 className="text-center display-6 my-0 ms-3">Métodos de Pago</h2>
      </div>
      <hr />
      <div className="row justify-content-center pagoTexto">
        <div className="col-8">
          <div className="card bg-light rounded p-3 mb-5 shadow">
            <div className="card-body text-center">
              <h5 className="card-title mb-4 pagoTexto">
                Selecciona un método de pago
              </h5>
              <div className="form-check mt-3">
                <div className="mb-3">
                  <i className="bi bi-credit-card me-2"></i>
                  <label className="form-check-label" htmlFor="tarjetaCredito">
                    Tarjeta de crédito
                  </label>
                </div>
                <div className="row justify-content-around mt-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                    alt="mastercard crédito"
                    className={`pagoImg ${
                      metodoSeleccionado === "Mastercard Crédito"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSeleccionarMetodo("Mastercard Crédito")
                    }
                  />
                  <img
                    src="https://logos-marcas.com/wp-content/uploads/2020/06/Visa-Logo.png"
                    alt="visa crédito"
                    className={`pagoImg ${
                      metodoSeleccionado === "Visa Crédito" ? "selected" : ""
                    }`}
                    onClick={() => handleSeleccionarMetodo("Visa Crédito")}
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzC1-8T7YJq8ycBp8gWCJ4XsiuUWBsqdciKmg-zXfEgnzt9HlGqNzb_cMphbJRQ_CJGHE&usqp=CAU"
                    alt="american express crédito"
                    className={`pagoImg ${
                      metodoSeleccionado === "American Express Crédito"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSeleccionarMetodo("American Express Crédito")
                    }
                  />
                </div>
              </div>
              <div className="form-check mt-3">
                <div className="mb-3">
                  <i className="bi bi-credit-card-2-front me-2"></i>
                  <label className="form-check-label" htmlFor="tarjetaDebito">
                    Tarjeta de débito
                  </label>
                </div>
                <div className="row justify-content-around mt-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                    alt="mastercard débito"
                    className={`pagoImg ${
                      metodoSeleccionado === "Mastercard Débito"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleSeleccionarMetodo("Mastercard Débito")}
                  />
                  <img
                    src="https://logos-marcas.com/wp-content/uploads/2020/06/Visa-Logo.png"
                    alt="visa débito"
                    className={`pagoImg ${
                      metodoSeleccionado === "Visa Débito" ? "selected" : ""
                    }`}
                    onClick={() => handleSeleccionarMetodo("Visa Débito")}
                  />
                </div>
              </div>
              <div className="form-check mt-3">
                <div className="mb-3">
                  <i className="bi bi-cash me-2"></i>
                  <label className="form-check-label" htmlFor="efectivo">
                    Efectivo
                  </label>
                </div>
                <div className="row justify-content-around mt-2">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/pago-efectivo-2020.svg"
                    alt="pago en efectivo"
                    className={`pagoImg ${
                      metodoSeleccionado === "Efectivo" ? "selected" : ""
                    }`}
                    onClick={() => handleSeleccionarMetodo("Efectivo")}
                  />
                </div>
              </div>
              <button
                className={`btn btn-success text-uppercase mt-4 ${
                  !metodoSeleccionado && "disabled"
                }`}
                onClick={handleConfirmarPago}
                disabled={!metodoSeleccionado}
              >
                Confirmar Pago
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={mostrarModal} onHide={handleCerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>¡Compra exitosa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Su producto será enviado. ¡Gracias por su compra!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCerrarModal}>
            Volver al inicio
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default MetodosDePago;
