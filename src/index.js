const app = require('./app')

// Connect to DB
const connection = require('./db/conn')
connection(process.env.MONGODB_URI)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

module.exports = app
