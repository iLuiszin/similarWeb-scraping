const mongoose = require('mongoose')

const connection = (uri) => {
  mongoose.connect(uri).then(() => {
    console.log('Connected to database')
  })
}

module.exports = connection
