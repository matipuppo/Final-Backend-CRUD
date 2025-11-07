const mongoose = require('mongoose')


const Schema = mongoose.Schema

const camionesSchema = new Schema({

    dominio:{type: String, required: true, unique: true, uppercase: true, minlength:6,maxlength:9},
    marca:{type: String, required: true, lowercase:true},
    modelo:{type: String, required: true, lowercase:true},
    kilometraje:{type: Number, required: true},
    anio:{type: Number, required: true, min:1950, max: 2025},
    precio:{type: Number, required: true, min: 1000},
    descripcion:{type: String}

})

module.exports = mongoose.model('Camiones', camionesSchema)