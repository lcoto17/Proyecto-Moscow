'use strict'

//Main imports
const express = require('express')
const bodyparser = require('body-parser')

//Api routes imports
const apiProduct = require('./routes/product')
const apiUser = require('./routes/user')

//Definitions
const app = express()

//Express configurations
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//API references
app.use('/api', apiProduct)
app.use('/api', apiUser)

module.exports = app