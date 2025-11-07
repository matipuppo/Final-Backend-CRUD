

const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET


async function getUsers(req, res){
    try {
        
        const users = await User.find() //* Busco todos los usuarios en la bd

        res.status(200).send({
            ok:true,
            message:'Lista de usuarios',
            users
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al obtener los usuarios'
        })
    }
}


async function getUsersById(req, res){

    try {

        const id = req.params.id

        const user = await User.findById(id)

        if(!user) {
            return res.status(404).send({
                ok: false,
                message: 'No se pudo encontrar el usuario'
            })
        }

        res.status(200).send({
            ok:true,
            message:'Usuario encontrado',
            user
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al obtener usuarios por ID'
        })
    }
}


async function postUsers(req,res) {
    
    try {
        
        req.body.password = await bcrypt.hash(req.body.password, saltRounds)

        const user = new User(req.body)

        const newUser = await user.save()

        newUser.password = undefined

        res.status(201).send({
            ok:true,
            message: 'Usuario creado correctamente',
            user: newUser
        })

    } catch (error) {

        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al crear el usaurio'
        })
    }
}

async function deleteUsers(req, res) {
    try {
        
        const id = req.params.id
        const deleteUsers = await User.findByIdAndDelete(id)

        if(!deleteUsers){
            return res.status(404).send({
                ok:false,
                message:'Error al borrar el usuario'
            })
        }

        res.status(200).send({
            ok:true,
            message:'El usuario se ha borrado correctamente',
            deleteUsers
        })

    } catch (error) {
        console.error(error)
        res.status(500).send({
            ok: false,
            message:'Error al eliminar el usuario'
        })
    }
}

async function putUsers(req, res) {
    try {
        const id = req.params.id

        const newData = req.body

        const updateUser = await User.findByIdAndUpdate(id, newData, {new:true})

        if(!updateUser){
            return res.status(404).send({
                ok:false,
                message: 'No se encontro el usuario para actualizar'
            })
        }

        res.status(200).send({
            ok:true,
            message:'Se ha editado al usuario correctamente',
            updateUser
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al actualiazr el usuario'
        })
    }
}



module.exports = {
    getUsers,
    getUsersById,
    postUsers,
    deleteUsers,
    putUsers
}