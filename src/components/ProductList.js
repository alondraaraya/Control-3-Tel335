import { Card
    ,Container, Row, Col, Button, ListGroup, ListGroupItem  } from "react-bootstrap"
import React from "react";
import './ProductList.css'

function ProductsList (props) {
    return (
        <section id='moviesList'>
            <Container>
                
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.movies.map((movie, index) => (
                                    <Card style={{ width: "18rem" }} key={index} className="box">
                                            <Card.Body>
                                                <Card.Title>{movie.Title}</Card.Title>
                                                <Card.Text>marca</Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>Precio: $ </ListGroupItem>
                                            </ListGroup>
                                            <Card.Body>
                                            <Col><Button variant="primary" size="sm" onClick={() => props.onAdd(movie)}>Agregar</Button></Col>
                                            </Card.Body>
                                    </Card>
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default ProductsList