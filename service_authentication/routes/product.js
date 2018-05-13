'use strict'

//Main imports
const express = require('express')

//Controller import
const ProductController = require('../controllers/product')

//Definitions
const apiProduct = express.Router()

//API routes
apiProduct.get('/product/', ProductController.getProducts)

apiProduct.get('/product/:productId', ProductController.getProduct)

apiProduct.post('/product/', ProductController.createProduct)

apiProduct.put('/product/:productId', ProductController.updateProduct)

apiProduct.delete('/product/:productId', ProductController.deleteProduct)

module.exports = apiProduct