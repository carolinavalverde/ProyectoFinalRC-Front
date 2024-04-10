import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProducto, leerProductos } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({producto, setProductos}) => {

  

  return (
    <tr>
      <td className="text-center">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+ producto._id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
