import {Router} from 'express'
// importar as controller dps
import productController from './product/product.controller'

const routes = Router()

// criar as rotas 
routes.get('/product', productController.read)

routes.post('/product', productController.create)


export default routes