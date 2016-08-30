
import {Router} from 'express'
// import r from 'rethinkdbdash'

import product from './controllers/product'
import productTemplate from './controllers/productTemplate'


const router = new Router()

router.get('/products', product.list)
router.get('/product/:id', product.item)
router.post('/product', product.add)
router.put('/product/:id', product.update)
router.delete('/product/:id', product.delete)

router.get('/product_templates', productTemplate.list)
router.get('/product_template/:id', productTemplate.item)
router.post('/product_template', productTemplate.add)
router.put('/product_template/:id', productTemplate.update)
router.delete('/product_template/:id', productTemplate.delete)


export default router
