import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProducto, leerProductos } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({ producto, setProductos }) => {
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
    </tr>
  );
};

export default ItemProducto;
