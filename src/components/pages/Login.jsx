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

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      Swal.fire({
        title: "Bienvenido",
        text: "Ingresaste al panel de administración de RollingCoffee",
        icon: "success",
      });
      setUsuarioLogueado(usuario.email);
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Email o password incorrecto",
        icon: "error",
      });
    }
  };

  const irARegistro = () => {
    navegacion("/registro");
  };

  return (
    <Container className="d-flex justify-content-center">
      <section className="my-5 col-6 container bg-white bg-opacity-50 rounded">
        <Card.Header as="h5" className="TituloLogin display-6 text-center ">
          Login
        </Card.Header>
        <Card.Body className="TextoLogin d-flex justify-content-center">
          <Form onSubmit={handleSubmit(onSubmit)} className="py-3 w-100">
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                  pattern: {
                    value: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <section className="d-flex justify-content-star">
              <Link to="/registro" className="fw-bold">
                ¿Olvidó su contraseña?
              </Link>
            </section>
            <section className="py-3 d-flex row justify-content-center">
              <Button
                className="btn btn-success bg-success text-light mx-2 my-2"
                style={{ width: "fit-content" }}
                type="submit"
              >
                Ingresar
              </Button>
              <Button
                className="btn btn-success bg-success text-light mx-2 my-2"
                style={{ width: "fit-content" }}
                onClick={irARegistro}
              >
                Registrar
              </Button>
            </section>
          </Form>
        </Card.Body>
      </section>

      <section className="ImgSection">
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

export default Login;