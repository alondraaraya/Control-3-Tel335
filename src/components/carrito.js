import { Row, Col, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react';
import {listmovies} from '../layout/infoPanel.layout'


function BotonCarrito() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
  
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
            {
            listmovies.map((movie)=>(
            <Col>{movie.Title}</Col> ))
            }     
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
  
