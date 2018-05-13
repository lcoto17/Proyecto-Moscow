'use strict'

const Product = require('../models/product')

function getProducts(req, res){
    Product.find({}, (err, products)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!products) return res.status(404).send({message:`No existen productos !`})

        return res.send(200, { products : products })
    })
}

function getProduct(req, res){
    let productId=req.params.productId

    Product.findById(productId, (err, product) => {
        console.log(product)
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!product) return res.status(404).send({message:`El producto no existe !`})
        
        return res.status(200).send({ product : product})

    })
}
function createProduct(req, res){
    console.log('POST: /api/product/')
    console.log(req.body)

    let product = new Product()

    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.picture = req.body.picture
    product.description = req.body.description

    product.save((err, stored) => {
        if(err) res.status(500).send({message:`Error al guardar el producto en la base de datos: ${err}`})
        res.status(200).send({product: stored})
    })
}
function updateProduct(req, res){
    let productId=req.params.productId
    let toUpdate = req.body

    Product.findByIdAndUpdate(productId, toUpdate, (err, productUpdated) => {

        if(err) return res.status(500).send({message:`Error al actualizar el producto: ${err}`})
        return res.status(200).send({ message : "El producto ha sido actualizado."})

    })
}
function deleteProduct(req, res){
    let productId=req.params.productId

    Product.findById(productId, (err, product) => {

        if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
        
        product.remove(err => {
            if(err) return res.status(500).send({message:`Error al borrar el producto: ${err}`})
            return res.status(200).send({ message : "El producto ha sido borrado"})
        })
    })
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
