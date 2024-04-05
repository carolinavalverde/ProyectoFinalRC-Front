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
      const respuesta = await registrarUsuario(usuario);
      if (respuesta.status === 201) {
        // Registro exitoso
        Swal.fire({
          title: "Registro exitoso",
          text: "Usuario registrado correctamente",
          icon: "success",
        });
        // Guardar el usuario en el state
        setUsuarioLogueado(usuario.email);
        // Redireccionar a la página de inicio de sesión
        navegacion("/login");
      } else {
        // Error en el registro
        Swal.fire({
          title: "Ocurrió un error",
          text: "No se pudo registrar el usuario. Inténtelo nuevamente",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      // Mostrar mensaje de error
      Swal.fire({
        title: "Ocurrió un error",
        text: "Hubo un problema al intentar registrar el usuario. Por favor, inténtelo nuevamente más tarde",
        icon: "error",
      });
    }
  };

  const irALogin = () => {
    navegacion("/login");
  };

  return (
    <Container className="d-flex justify-content-center">
      <section className="my-5 col-6 container bg-white bg-opacity-50 rounded">
        <Card.Header as="h5" className="TituloRegistro display-6 text-center">
          Registro
        </Card.Header>
        <Card.Body className="TextoRegistro d-flex justify-content-center">
          <Form onSubmit={handleSubmit(onSubmit)} className="py-3 w-100">
            <Form.Group className="mb-3" controlId="formBasicNombre">
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
                {errors.nombreApellido?.message}
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
                {errors.direccion?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
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
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value: /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
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
                Registrarse
              </Button>
              <Button
                className="btn btn-success bg-success text-light mx-2 my-2"
                style={{ width: "fit-content" }}
                onClick={irALogin}
              >
                Iniciar Sesión
              </Button>
            </section>
          </Form>
        </Card.Body>
      </section>
    </Container>
  );
};

export default Registro;