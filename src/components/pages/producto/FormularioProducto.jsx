import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearProducto,
  obtenerProducto,
  editarProducto,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FormularioProducto = ({ editando, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editando) {
      //solicitar y mostrar el producto en el formullario
      cargarProductoEnFormulario();
    }
  }, []);

  const cargarProductoEnFormulario = async () => {
    const respuesta = await obtenerProducto(id);
    if (respuesta.status === 200) {
      //extraer el producto de la respuesta
      const productoBuscado = await respuesta.json();
      //cargar los datos del producto en el formulario
      setValue("nombreProducto", productoBuscado.nombreProducto);
      setValue("precio", productoBuscado.precio);
      setValue("imagen", productoBuscado.imagen);
      setValue("categoria", productoBuscado.categoria);
      setValue("descripcion_breve", productoBuscado.descripcion_breve);
      setValue("descripcion_amplia", productoBuscado.descripcion_amplia);
    }
  };

  const datosValidados = async (producto) => {
    //console.log(producto);
    if (editando) {
      const respuesta = await editarProducto(producto, id);
      console.log(respuesta);
      //si recibi status 200 se edito correctamente
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Producto editado",
          text: `El producto: ${producto.nombreProducto} fue editado correctamente`,
          icon: "success",
        });
        //redireccionar
        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "El producto no se pudo editar",
          text: `El producto: ${producto.nombreProducto} no se pudo editar, intentelo nuevamente`,
          icon: "error",
        });
      }
    } else {
      //le voy a pedir a la api crear el producto nuevo
      const respuesta = await crearProducto(producto);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text: `El producto: ${producto.nombreProducto} fue creado correctamente`,
          icon: "success",
        });
        //resetear el form
        reset();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `El producto no pude ser creado, intente esta operacion en unos minutos`,
          icon: "error",
        });
      }
    }
  };

  return (
   <section>
    <form >
      
    </form>
   </section>
  );
};

export default FormularioProducto;

