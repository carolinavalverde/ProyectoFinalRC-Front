import React from 'react';
import { Table, Container } from "react-bootstrap";
import '../../styles/CarritoPedidos.css';

const CarritoPedidos = () => {
    return (
        <Container>
        <h2 className="my-3 text-center">Carrito de Compras</h2>
        <Table striped bordered hover className=" m-auto mt-5 text-center" responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Brownie de Chocolate</td>
              <td>Un brownie denso y deliciosamente chocolatoso.</td>
              <td>$598</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex justify-content-end" ><p className="my-3 me-1 p-2 bg-light border border-secondary">Total: $598</p></div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary my-2 ">Hacer Pedido</button>
        </div>
      </Container>
    );
};

export default CarritoPedidos;