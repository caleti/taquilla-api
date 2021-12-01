require('dotenv').config() // Cargar las variables de entorno del archivo .env (si es que existe)

const express = require('express') // importamos Express.js
const config = require('./config') // importamos la configuración de esta API


const app = express()

// convertir los campos de peticiones POST a objetos JSON
app.use(express.json())

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
const router = require('./routes')
app.use('/api', router)

//arrancamos el servidor
app.listen(config.PORT, config.HOST)
console.log('API escuchando en el puerto ' + config.PORT)