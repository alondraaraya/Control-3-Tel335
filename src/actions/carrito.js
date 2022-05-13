import productos from  "../data/carrito"
import carrito from  "../data/carritoVerdadero"
exports.getProducts = () => {
    return productos
};


exports.getProductsByID = (id) => {
    let productosEncontrados = []
    for (let i = 0; i<productos.length;i++){
        if(id == productos[i].id){
            productosEncontrados.push(productos[i])
        }
    }

    //deberia retornar un json
    return productosEncontrados
};

exports.getProductsByBrand = (brand) => {
    let productosEncontrados = []
    for (let i = 0; i<productos.length;i++){
        if(brand == productos[i].marca){
            productosEncontrados.push(productos[i])
        }
    }
    //deberia retornar un json
    return productosEncontrados
};

exports.addProduct = (id) => {
    for (let i = 0; i<productos.length;i++){
        if(id == productos[i].id){
            carrito.push(productos[i])
        }
    }
    
    return carrito

}

exports.getAllItem = () =>{
    return carrito
}