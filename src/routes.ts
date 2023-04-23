import {Router} from 'express'
// importar as controller dps
import productController from './product/product.controller'
import stockController from './stock/stock.controller'
const routes = Router()

// criar as rotas 
routes.get('/product', productController.read)

routes.post('/product', productController.create)

routes.put('/product/:id', productController.update)

routes.delete('/product/:id', productController.delete)

routes.get('/products-random', productController.listRandom)

routes.post('/stock', stockController.createStock)

routes.get('/stock-value', stockController.stockValue)

routes.post('/products-write', productController.writeProducts)

routes.get('/products-read', productController.readProducts)

export default routes