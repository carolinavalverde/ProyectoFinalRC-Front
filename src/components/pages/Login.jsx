import { Form, Button, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    const respuesta = await login(usuario);

    if (respuesta) {
      console.log(respuesta);
      const usuario = {
        rol: respuesta.rol,
        nombreUsuario: respuesta.nombreUsuario,
        contraseña: respuesta.contraseña,
        email: respuesta.email,
      };
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      Swal.fire(`¡Bienvenido!`, `Iniciaste sesión correctamente.`, "success");
      if (respuesta.rol === "Admin") {
        navegacion("/administrador/");
      } else {
        navegacion("/");
      }
    } else {
      Swal.fire("Error", "Email o contraseña incorrecto ", "error");
    }
  };

  const irARegistro = () => {
    navegacion("/registro");
  };

  return (
    <Container className="d-flex justify-content-center">
      <section className="my-5 col-lg-6 col-md-6 col-sm-8 container bg-white bg-opacity-50 rounded">
        <Card.Header as="h5" className="TituloLogin display-6 text-center my-3">
          Login
        </Card.Header>
        <Card.Body className="TextoLogin d-flex justify-content-center">
          <section className="d-flex row justify-content-center">
            <Form onSubmit={handleSubmit(onSubmit)} className="py-2 w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un email"
                  {...register("email", {
                    required: "El nombre de usuario es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="loginVermontRestaurant">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  minLength={8}
                  maxLength={16}
                  {...register("contraseña", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "Su contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.contraseña?.message}
                </Form.Text>
              </Form.Group>
              <section className="d-flex justify-content-star">
                <Link to="/registro" className="fw-bold">
                  ¿Olvidó su contraseña?
                </Link>
              </section>

              <section className="pt-3 d-flex row justify-content-center">
                <Button
                  className="btn btnLogin text-uppercase mx-2 my-2"
                  style={{ width: "fit-content" }}
                  type="submit"
                >
                  Ingresar
                </Button>
              </section>
            </Form>

            <section className="pb-2 justify-content-center text-center">
              <Button
                className="btn btnSecundarioLogin text-uppercase bg-opacity-75 mx-2 my-2"
                style={{ width: "fit-content" }}
                onClick={irARegistro}
              >
                Registrarse
              </Button>
            </section>
          </section>
        </Card.Body>
      </section>

      <section className="ImgSection d-none d-sm-block">
        <img
          className="ImgLogin img-fluid h-100 ms-2 me-0"
          src="https://images.pexels.com/photos/9394523/pexels-photo-9394523.jpeg"
          alt="fondo restaurant"
        />
      </section>
    </Container>
  );
};

export default Login;
