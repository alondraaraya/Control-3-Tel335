import { useState, useEffect } from "react"
import axios from "axios"
import SpinnerLoader from "../components/Spinner"
import ProductList from "../components/ProductList"
import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from "../reducer/reducer"


const store = configureStore({
    reducer: ProductReducer
  })

export const listProductsEnCarrito = []
export function InfoPanel () {
    const [loaded, setDataLoaded] = useState(false)
    const [ProductsData, setProductsData] = useState([])

    const addProduct = (product) => {
        store.dispatch({ type: 'ADD', product })
        alert(`Producto agregado: ${product.name}`)
        listProductsEnCarrito.push(product)

    }

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                const result = await axios.get('/data/datos.json')
                if (result.data) {
                    setDataLoaded(true)
                    setProductsData(result.data)
                }
            }
        }
        fetchData()
    })

    store.subscribe(() => {
        console.log(store.getState())
    })

    return (
        <div className="App">
            <SpinnerLoader dataLoaded={loaded} />
            <ProductList products={ProductsData} onAdd={addProduct} />
        </div>
    )
}

