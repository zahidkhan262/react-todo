const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        logging: true,
    }
})


sequelize.authenticate()
    .then(() => {
        console.log('database successfully connected...')
    }).catch(err => {
        console.log(err, "db is not conncted")
    })


const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.userModel = require('../models/userModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
    console.log('yess re-sync done!!!')
}).catch(err => {
    console.log('\x1b[31m', err, "not sync..")
})


module.exports = db;