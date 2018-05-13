'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')


function SignUp(req,res){
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })
    user.save((err)=>{
        if(err) res.status(500).send({message:`Error al guardar el usuario en la base de datos: ${err}`})
        res.status(200).send({token: service.createToken(user)})
    })
}

function SignIn(req, res){
    console.log(req.body.password);
    
    User.findOne({ email: req.body.email}, (err, user) => {
        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'El usuario no existe'})
        
        req.user = user
        
        res.status(200).send({
            message: 'Acceso correcto !',
            token: service.createToken(user)
        })
    })

}

module.exports = {
    SignUp,
    SignIn
}