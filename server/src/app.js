console.log('hello')

const express = require('express')
const bodyParser = require('body-parser') //parse json easily
const cors = require('cors')
const morgan = require('morgan') //log
const {sequelize} = require('./models')
const config = require('./config/config')

//build new express server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//attach all endpoints to 'app' variable
require('./routes')(app)

//connect sequelize to database, and create the tables
sequelize.sync()
.then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})
