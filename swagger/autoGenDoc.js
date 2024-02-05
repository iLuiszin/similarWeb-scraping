const mongooseToSwagger = require('mongoose-to-swagger')
const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0',
  language: 'pt-BR',
})
const WebSite = require('../src/models/WebSite')

let outputFile = './swagger_output.json'
let endpointsFiles = ['../src/index.js', '../src/routes/ScrapeRoutes.js']

let doc = {
  info: {
    version: '1.0.0',
    title: 'SimilarWeb Scraper API',
    description: 'API para coleta de informações do site SimilarWeb',
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Servidor localhost.',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  components: {
    schemas: {
      WebSite: mongooseToSwagger(WebSite),
    },
  },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log(
    'Documentação do Swagger gerada encontra-se no arquivo em: ' + outputFile
  )
  if (process.env.NODE_ENV !== 'production') {
    require('../src/index.js')
  }
})
