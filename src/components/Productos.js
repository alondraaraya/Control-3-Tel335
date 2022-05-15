import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import './ProductList.css'

const ProductsCards = (props,Product,index) => {
  return (
    <Card style={{ width: "18rem" }} key={index} className="box">
      <Card.Body>
        <Card.Title>{Product.name}</Card.Title>
        <Card.Text>Marca: {Product.marca}</Card.Text>
      </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Precio: ${Product.precio} </ListGroupItem>
    </ListGroup>
     <Card.Body>
     <Button variant="danger" size="sm" onClick={() => props.onAdd(Product)}>Agregar</Button>
    </Card.Body>
    </Card>
  );

};

export default ProductsCards;
