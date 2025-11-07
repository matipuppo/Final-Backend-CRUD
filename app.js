//? Define la estructura base del servidor web usando Express. Es el nucleo donde se configuran los middelwares y las rutas.

const express = require('express')

const app = express()

const userRoutes = require('./routes/user.routes')
const camionesRoutes = require('./routes/camiones.routes')

app.use(express.json())

app.use('/api',[userRoutes, camionesRoutes])

module.exports = app