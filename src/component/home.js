import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {
      image: "https://media.istockphoto.com/photos/kefir-milk-or-turkish-ayran-drink-are-poured-into-a-glass-cup-from-a-picture-id1198789194",
      name: "Leche",
      marca: "Soprole",
      precio: "990"
    },
  ]
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
      <Button variant="primary">Agregar</Button>
    </Card.Body>
    </Card>
  );
};

return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
