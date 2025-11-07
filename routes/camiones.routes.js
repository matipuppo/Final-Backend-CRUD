const express = require('express')

const router = express.Router()

const camionesController = require('../controllers/camiones.controller.js')

//? GET


router.get('/camiones', camionesController.getCamiones)

//? GET BY ID

router.get('/camiones/:id', camionesController.getCamionesById)

//? POST

router.post('/camiones', camionesController.postCamiones)

//? DELETE

router.delete('/camiones/:id', camionesController.deleteCamiones)

//? PUT

router.put('/camiones/:id', camionesController.putCamiones)



module.exports = router