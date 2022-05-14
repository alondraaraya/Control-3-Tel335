import carritoAction from '../../actions/carrito.js';

exports.getAllProducts = (ctx) => {
    ctx.body = carritoAction.getProducts()
    return ctx
}

exports.getProductsByID = (ctx) => {
    const ID = ctx.params.id;
    const response = carritoAction.getProductsByID(ID)
    ctx.body = response
    return ctx
}

exports.getProductsByBrand = (ctx) => {
    const BRAND = ctx.params.BRAND;
    console.log(BRAND)
    const response = carritoAction.getProductsByBrand(BRAND)
    ctx.body = response
    return ctx
}


exports.addProduct = (ctx) => {
    let id = ctx.request.body.id
    const response = carritoAction.addProduct(id);
    ctx.body = response
}

exports.getAllItem = (ctx) => {
    ctx.body = carritoAction.getAllItem()
    return ctx;
}