import express from 'express'
import { getAllProducts, getFeaturedProducts, getSingleProduct, getProductsByCategory } from '../controllers/product.js'

const router = express.Router()

//get featured products
router.get('/featured', getFeaturedProducts)

//get all product
router.get('/', getAllProducts)

//get single product
router.get('/:slug', getSingleProduct)

router.get('/category/:categoryid', getProductsByCategory)


export default router