import { Row, Col, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react';
import {listProductsEnCarrito, listProductsEnCarrito2} from '../layout/infoPanel.layout'
import axios from 'axios'

function BotonCarrito() {
    const [show, setShow] = useState(false);
    let listProducstsEnCarrito2 = []
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    axios.get('http://localhost:3001/carrito/productos')
    .then(response => {
        // Obtenemos los datos
        listProducstsEnCarrito2.unshift(response.data)
    })
    .catch(e => {
        // Capturamos los errores
    })

    let listaProductos = listProductsEnCarrito2[0]

  
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Carrito de compras
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Productos agregados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
                <Col> Nombre </Col>
                <Col>Precio </Col>
            </Row>,
            {
            listProductsEnCarrito.map((product, index)=>(
            <Row>
                <Col key ={index}>{product.name}</Col>
                <Col key ={index}>$: {product.precio}</Col>
            </Row>
             ))
            }     
          </Modal.Body>
          <Modal.Body>
            Total :    
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default BotonCarrito
  
