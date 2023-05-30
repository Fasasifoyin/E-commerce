import express from 'express'
import { getProductsBySearch } from '../controllers/search.js'

const router = express.Router()

//search for products
router.get('/search', getProductsBySearch)

export default router