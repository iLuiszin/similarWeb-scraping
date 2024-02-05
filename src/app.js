const express = require('express')

// Import Swagger configs
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

// Import routes
const ScrapeRoutes = require('./routes/ScrapeRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('dotenv/config')

app.use('/', ScrapeRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app
