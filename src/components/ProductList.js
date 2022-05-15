import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import ProductsCards from './Productos'

function ProductsList (props) {
    return (
        <section id='ProductList'>
            <Container>
                
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    ProductsCards(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default ProductsList