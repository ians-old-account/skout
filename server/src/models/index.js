const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize') // sequelize is an ORM used to connect to sql databases
const config = require('../config/config')
const db = {}

// connect to database, using details from config file
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// this imports all the models into sequelize. so dont have to require each one
fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
