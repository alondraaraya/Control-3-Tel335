import Router from 'koa-router'
import getHealth from './health/health'
//import dataUsers from '../data/users'
import getToken from './token/token.routes'

const router = new Router()
router.get('/health', getHealth)
router.get('/token/:id/:secret/:key', getToken.getToken2)
router.get('token/:token', getToken.getUsers)

export default router
