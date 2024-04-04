import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Nosotros.css";

const AcercaDeNosotros = () => {
  return (
    <Container>
      <main class="mainFondo">
        <section class="container my-3">
          <h1 class="text-center mb-4">Team 3 🚀</h1>
        </section>
        <section class="container my-3 d-flex flex-column">
          <div class="card mb-3 col-8 d-flex align-self-start">
            <div class="row g-0">
              <div class="col-md-4 bg-danger">
                <img
                  src="https://img.freepik.com/vector-premium/icono-plano-vectorial-hombre-gafas-icono-vectorial-circular_176841-4665.jpg?w=740"
                  class="img-fluid rounded-circle"
                  alt="imagen Roberto Arebalo"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Roberto Arebalo</h5>
                  <p class="card-text">
                    Todo está diseñado para crear un ambiente sofisticado y
                    elegante que realce el placer de disfrutar de una buena
                    comida en compañía de seres queridos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 col-8 d-flex align-self-end">
            <div class="row g-0">
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Bruno Cordoba</h5>
                  <p class="card-text">
                    Su fachada moderna y elegante invita a los comensales a
                    adentrarse en un mundo de exquisita culinaria y hospitalidad
                    sin igual.
                  </p>
                </div>
              </div>
              <div class="col-md-4 bg-danger">
                <img
                  src="https://img.freepik.com/vector-premium/icono-perfil-dibujado-mano-personaje-avatar_884500-33593.jpg?w=740"
                  class="img-fluid rounded-circle"
                  alt="imagen Bruno Cordoba"
                />
              </div>
            </div>
          </div>
          <div class="card mb-3 col-8 d-flex align-self-start">
            <div class="row g-0">
              <div class="col-md-4 bg-danger">
                <img
                  src="https://img.freepik.com/vector-premium/icono-plano-vectorial-hombre-bigote-camisa-azul-estilo-vectorial-minimalista_176841-4753.jpg?w=740"
                  class="img-fluid rounded-circle"
                  alt="imagen Fernando Figueroa"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Fernando Figueroa</h5>
                  <p class="card-text">
                    Cada plato es una obra maestra de creatividad y técnica,
                    elaborado con ingredientes frescos y de la más alta calidad,
                    seleccionados cuidadosamente para satisfacer los paladares
                    más exigentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 col-8 d-flex align-self-end">
            <div class="row g-0">
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Caro Valverde</h5>
                  <p class="card-text">
                    En el corazón de la ciudad, se alza un refugio gastronómico
                    donde los sabores se convierten en poesía y la atmósfera en
                    un baile de emociones.
                  </p>
                </div>
              </div>
              <div class="col-md-4 bg-danger">
                <img
                  src="https://img.freepik.com/fotos-premium/icono-linea-moderno-lindo-personaje-sonriente-lineas-negrita-color-solido-pixel-perfecto-aislar-minimalista_68067-5454.jpg?w=740"
                  class="img-fluid rounded-circle"
                  alt="imagen Caro Valverde"
                />
              </div>
            </div>
          </div>
          <div class="card mb-3 col-8 d-flex align-self-start cardBlancoYNegro">
            <div class="row g-0">
              <div class="col-md-4 bg-danger">
                <img
                  src="https://img.freepik.com/vector-premium/ilustracion-vectorial-hombre-hipster-barba-gafas-circulo_1142-80477.jpg?w=740"
                  class="img-fluid rounded-circle"
                  alt="imagen Santiago Zelada"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Santiago Zelada</h5>
                  <p class="card-text">
                    El menú se renueva periódicamente para reflejar las últimas
                    tendencias gastronómicas y estacionales. Los platos son una
                    fusión de tradición y vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default AcercaDeNosotros;
