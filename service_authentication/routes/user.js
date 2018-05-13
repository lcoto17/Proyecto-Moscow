'use strict'

//Main imports
const express = require('express')

//Controller import
const UserController = require('../controllers/user')

//Auth import
const auth = require('../middlewares/auth')

//Definitions
const apiUser = express.Router()

//API routes
apiUser.get('/private/', auth, (req, res) => {
     res.status(200).send({message: 'Tienes acceso!'})
})
apiUser.post('/signup', UserController.SignUp)
apiUser.post('/signin', UserController.SignIn)



module.exports = apiUser