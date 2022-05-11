import Router from 'koa-router'
import carrito from './carrito/carrito.routes'
const router = new Router()
router.get('/productos', carrito.getAllProducts)
router.get('/productos/id/:id/', carrito.getProductsByID )
router.get('/productos/marca/:BRAND', carrito.getProductsByBrand)
export default router
