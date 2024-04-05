import { Form, Button, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    if (login(usuario)) {
      //soy el admin
      Swal.fire({
        title: "Bienvenido",
        text: "Ingresaste al panel de administración de RollingCoffee",
        icon: "success",
      });
      //guardar el usuario en el state
      setUsuarioLogueado(usuario.email);
      //redireccionar al admin
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
    window.location.href = "/registro";
  };

  return (
    <Container>
      <Card className="my-5">
        <Card.Header as="h5" className="TituloLogin display-6 text-center ">
          Login
        </Card.Header>
        <Card.Body className="TextoLogin d-flex justify-content-center ">
          <Form onSubmit={handleSubmit(onSubmit)} className="py-3">
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
              <span className="fw-bolb" onClick={irARegistro}>¿Olvidó su contraseña?</span>
            </section>
            <div className="d-flex justify-content-center py-3">
              <Button
                className="btn btn-success bg-success text-light mx-2"
                type="submit"
              >
                Ingresar
              </Button>

              <Button
                className="btn btn-success bg-success text-light mx-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
