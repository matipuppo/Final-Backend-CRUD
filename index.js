//* Levanta variables de entorno
//* Conecta a la base de datos de mongo
//* Levanta el servidor Web


require('dotenv').config()

const mongoose = require('mongoose')

const app = require('./app')


mongoose.connect(process.env.MONGO_URL) //! Me conecta con la Bd
    .then(() =>{
        console.log('\x1b[32m Base de datos conectada\x1b[0m')

        app.listen(process.env.SV_PORT, () => {
            console.log(`Servidor levantado en puerto ${process.env.SV_PORT}`)
        })
    })
    .catch((error)=>{
        console.log('\x1b[31m✖ Error al conectar\x1b[0m')
        console.log(error)
    })

