import { Form, Button, Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { registrarUsuario } from "../../helpers/queries";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Registro.css";

const Registro = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      // Validar el formulario aquí
      if (!usuario.nombreApellido || !usuario.email || !usuario.password) {
        throw new Error("Todos los campos son obligatorios");
      }

      const respuesta = await registrarUsuario(usuario);
      if (respuesta) {
        Swal.fire({
          title: "Registro exitoso",
          text: "Usuario registrado correctamente",
          icon: "success",
        });
        setUsuarioLogueado(usuario.email);
        navegacion("/login");
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      Swal.fire({
        title: "Ocurrió un error",
        text:
          error.message ||
          "Hubo un problema al intentar registrar el usuario. Por favor, inténtelo nuevamente más tarde",
        icon: "error",
      });
    }
  };

  const irALogin = () => {
    navegacion("/login");
  };

  return (
    <Container className="d-flex justify-content-center">
      <section className="my-5 col-lg-6 col-md-6 col-sm-8 container bg-white bg-opacity-50 rounded">
        <Card.Header as="h5" className="TituloRegistro display-6 text-center my-3">
          Registro
        </Card.Header>
        <Card.Body className="TextoRegistro d-flex justify-content-center">
          <section className="d-flex row justify-content-center">
            <Form onSubmit={handleSubmit(onSubmit)} className="py-2 w-100">
              <Form.Group className="mb-3" controlId="nombreApellido">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  {...register("nombreApellido", {
                    required: "El nombre y apellido son obligatorios",
                    pattern: {
                      value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/,
                      message:
                        "El campo debe contener solo letras y puede incluir caracteres especiales como comas, puntos, apóstrofes y guiones",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreApellido && errors.nombreApellido.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su dirección"
                  {...register("direccion", {
                    required: "La dirección es obligatoria",
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.direccion && errors.direccion.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un email"
                  {...register("email", {
                    required: "El correo electrónico es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida, debe contener un arroba",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email && errors.email.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password && errors.password.message}
                </Form.Text>
              </Form.Group>

              <section className="d-flex justify-content-start">
                <Link to="/registro" className="fw-bold">
                  ¿Olvidó su contraseña?
                </Link>
              </section>

              <section className="pt-3 row justify-content-center">
                <Button
                  className="btn btnRegistro text-uppercase text-light mx-2 my-2"
                  style={{ width: "fit-content" }}
                  type="submit"
                >
                  Registrarse
                </Button>
              </section>
            </Form>

            <section className="pb-2 justify-content-center text-center">
              <Button
                className="btn btnSecundarioRegistro text-uppercase bg-opacity-75 mx-2 my-2"
                style={{ width: "fit-content" }}
                onClick={irALogin}
              >
                Iniciar Sesión
              </Button>
            </section>
          </section>
        </Card.Body>
      </section>

      <section className="ImgSection d-none d-sm-block">
        <img
          className="ImgRegistro img-fluid h-100 ms-2 me-0"
          src="https://images.pexels.com/photos/2114062/pexels-photo-2114062.jpeg"
          alt="fondo restaurant"
        />
      </section>
    </Container>
  );
};

export default Registro;
