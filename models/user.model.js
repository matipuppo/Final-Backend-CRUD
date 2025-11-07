const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

    nombre:{type: String, required: true, minlenght: 2, maxlength: 20},
    apellido:{type: String, required: true, minlenght: 2, maxlength: 20},
    email:{type: String, required: true, unique: true, lowercase: true},
    password:{type: String, required: true, minlenght: 6, maxlength: 100},
    provincia:{ type: String },
    localidad:{ type: String },
    role:{ type: String, enum: ['user', 'admin', 'client'], default: 'client' }

})

module.exports = mongoose.model('User', userSchema)