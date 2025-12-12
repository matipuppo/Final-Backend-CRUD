const express = require('express')

const router = express.Router()

const userController = require('../controllers/user.controller.js')

const auth = require('../middlewares/auth.js')
const isAdmin = require('../middlewares/isAdmin.js')


//? GET

router.get('/users', userController.getUsers)


//? GET BY ID
router.get('/users/:id', userController.getUsersById)

//? POST
router.post('/users', userController.postUsers)


//? DELETE
router.delete('/users/:id',[auth, isAdmin], userController.deleteUsers)


//? PUT
router.put('/users/:id', userController.putUsers)


//? POST Login
router.post('/login', userController.login)


module.exports = router
