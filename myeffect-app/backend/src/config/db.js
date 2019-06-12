const Sequelize = require('sequelize');
const db = {}

const sequelize = new Sequelize('myeffect2', 'root', 'captainRitz95', {
  host: 'localhost',
  dialect:  'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
  }
})
//Database connection;
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db