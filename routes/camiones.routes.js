const express = require('express')

const router = express.Router()

const camionesController = require('../controllers/camiones.controller.js')

const auth = require('../middlewares/auth.js')
const isAdmin = require('../middlewares/isAdmin.js')

//? GET


router.get('/camiones', camionesController.getCamiones)

//? GET BY ID

router.get('/camiones/:id', camionesController.getCamionesById)

//? POST

router.post('/camiones',[auth, isAdmin], camionesController.postCamiones)

//? DELETE

router.delete('/camiones/:id',[auth, isAdmin], camionesController.deleteCamiones)

//? PUT

router.put('/camiones/:id',[auth, isAdmin], camionesController.putCamiones)



module.exports = router