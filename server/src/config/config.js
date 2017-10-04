module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'skout',
        user: process.env.DB_USER || 'skout',
        password: process.env.DB_PASS || 'skout',
        options: {
            dialect: process.env.DIALECT || 'sqlite',   // type of database you are connecting to
            host: process.env.HOST || 'localhost',      // location of the database
            storage: './skout.sqlite'                   // where to store sqlite file
        }
    }
}
