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