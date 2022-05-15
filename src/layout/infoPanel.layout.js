import { useState, useEffect } from "react"
import axios from "axios"
import SpinnerLoader from "../components/Spinner"
import ProductList from "../components/ProductList"
import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../reducer/reducer"


const store = configureStore({
    reducer: moviesReducer
  })

export const listProductsEnCarrito = []
export function InfoPanel () {
    const [loaded, setDataLoaded] = useState(false)
    const [moviesData, setMoviesData] = useState([])

    const addMovie = (product) => {
        store.dispatch({ type: 'ADD', product })
        alert(`Producto agregado: ${product.name}`)
        listProductsEnCarrito.push(product.name)

    }

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                const result = await axios.get('/data/datos.json')
                if (result.data) {
                    setDataLoaded(true)
                    setMoviesData(result.data)
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
            <ProductList movies={moviesData} onAdd={addMovie} />
        </div>
    )
}

