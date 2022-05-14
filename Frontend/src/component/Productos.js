import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import  {addToCart}  from '../actions/actionsCarrito'
import {initialState} from '../reducers/carritoReducer'

const MoreDeets = () => {

const renderCard = (card, index) => {
  return (
    <Card style={{ width: "18rem" }} key={index} className="box">
      <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.marca}</Card.Text>
      </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Precio: $ {card.precio}</ListGroupItem>
    </ListGroup>
     <Card.Body>
      <Button variant="primary" onClick={() => addToCart(card.id)}>Agregar</Button>
    </Card.Body>
    </Card>
  );
};

return <div className="grid">{initialState.cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
