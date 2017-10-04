module.exports = (sequelize, DataTypes) =>
    //creates and returns User model
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
