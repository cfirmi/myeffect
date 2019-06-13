const Sequelize = require('sequelize');
const db = {}

const sequelize = new Sequelize('myeffect', 'root', 'captainRitz95', {
  host: 'localhost',
  dialect:  'mysql',
  operatorAliases: false,
   
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

})
//Database connection;
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db