const Camiones = require('../models/camiones.model.js')

const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET


async function getCamiones(req, res){
    try {
        
        const trucks = await Camiones.find() //* Busco todos los camiones en la bd

        res.status(200).send({
            ok:true,
            message:'Lista de camiones',
            trucks
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al obtener los camiones'
        })
    }
}


async function getCamionesById(req, res){

    try {

        const id = req.params.id

        const truck = await Camiones.findById(id)

        if(!truck) {
            return res.status(404).send({
                ok: false,
                message: 'No se pudo encontrar el camion'
            })
        }

        res.status(200).send({
            ok:true,
            message:'Camion encontrado',
            truck
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al obtener camiones por ID'
        })
    }
}


async function postCamiones(req,res) {
    
    try {
        

        const truck = new Camiones(req.body)

        const newTruck = await truck.save()


        res.status(201).send({
            ok:true,
            message: 'Camion creado correctamente',
            truck: newTruck
        })

    } catch (error) {

        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al crear el camion'
        })
    }
}

async function deleteCamiones(req, res) {
    try {
        
        const id = req.params.id
        const deleteTrucks = await Camiones.findByIdAndDelete(id)

        if(!deleteTrucks){
            return res.status(404).send({
                ok:false,
                message:'Error al borrar el camion'
            })
        }

        res.status(200).send({
            ok:true,
            message:'El Camion se ha borrado correctamente',
            deleteTrucks
        })

    } catch (error) {
        console.error(error)
        res.status(500).send({
            ok: false,
            message:'Error al eliminar el camion'
        })
    }
}

async function putCamiones(req, res) {
    try {
        const id = req.params.id

        const newData = req.body

        const updateTruck = await Camiones.findByIdAndUpdate(id, newData, {new:true})

        if(!updateTruck){
            return res.status(404).send({
                ok:false,
                message: 'No se encontro el camion para actualizar'
            })
        }

        res.status(200).send({
            ok:true,
            message:'Se ha editado al camion correctamente',
            updateTruck
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message:'Error al actualiazr el camion'
        })
    }
}



module.exports = {
    getCamiones,
    getCamionesById,
    postCamiones,
    deleteCamiones,
    putCamiones
}