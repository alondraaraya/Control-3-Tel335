import { Container, Row, Col, Button } from "react-bootstrap"
import React from "react";


function MoviesList (props) {
    return (
        <section id='moviesList'>
            <Container>
                <Row>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.movies.map((movie, index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col><h2>{movie.Title}</h2></Col>
                                            <Col><h3>precio</h3></Col>
                                            <Col><h3>marca</h3></Col>
                                            <Col><Button variant="primary" size="sm" onClick={() => props.onAdd(movie)}>Agregar</Button></Col>
                                        </Row>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default MoviesList