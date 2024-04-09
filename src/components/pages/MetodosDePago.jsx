import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MetodosDePago = () => {
  const navigate = useNavigate();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

  const handleSeleccionarMetodo = (metodo) => {
    setMetodoSeleccionado(metodo);
  };

  const handleConfirmarPago = () => {
    if (metodoSeleccionado) {
      setTimeout(() => {
        console.log("Pago confirmado con:", metodoSeleccionado);
        localStorage.removeItem("carrito");
        navigate(-1);
      }, 2000); 
    } else {
      alert("Por favor, selecciona un método de pago.");
    }
  };

  return (
    <section className="container">
      <h2 className="my-3 text-center fw-bold">Métodos de Pago</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4 p-2 bg-light rounded bg-opacity-50">
            <div className="card-body text-center">
              <h5 className="card-title my-3">Selecciona un método de pago</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="metodoPago"
                  id="tarjetaCredito"
                  value="Tarjeta de crédito"
                  onChange={() => handleSeleccionarMetodo("Tarjeta de crédito")}
                />
                <label className="form-check-label" htmlFor="tarjetaCredito">
                  Tarjeta de crédito
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="metodoPago"
                  id="paypal"
                  value="PayPal"
                  onChange={() => handleSeleccionarMetodo("PayPal")}
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="metodoPago"
                  id="transferencia"
                  value="Transferencia bancaria"
                  onChange={() =>
                    handleSeleccionarMetodo("Transferencia bancaria")
                  }
                />
                <label className="form-check-label" htmlFor="transferencia">
                  Transferencia bancaria
                </label>
              </div>
              <button
                className="btn btn-success text-dark mt-3"
                onClick={handleConfirmarPago}
                disabled={!metodoSeleccionado}
              >
                Confirmar Pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodosDePago;
