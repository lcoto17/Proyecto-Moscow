'use strict'

//Main imports
const config = require('./config')
const app = require('./app')
const mongoose = require('mongoose')

//Definitions
const port = config.port

//Connecting to DB
mongoose.connect(config.db, (err, res) => {
    
    if(err){
        return console.log(`Error conectando a la base de datos: ${err}`)
    }

    console.log('Conexión establecida con la BD correctamente!')

    app.listen(port, ()=>{
        console.log(`API REST corriendo en http://localhost:${port}`)    
    })
})


