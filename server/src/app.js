console.log('hello')

const express = require('express')
const bodyParser = require('body-parser') //parse json easily
const cors = require('cors')
const morgan = require('morgan') //log

//build new express server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//create /status end point
app.post('/register', (req, res) => {
    res.send({                      //when it gets this request, its going to send this response
        message: `Hello ${req.body.email}! Your user was registered.`
    })
})

app.listen(process.env.PORT || 8081)