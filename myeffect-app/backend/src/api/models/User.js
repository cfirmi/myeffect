const Sequelize = require('sequelize')
const db = require('../../config/db')

module.exports = db.sequelize.define(
'user',
  {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      allowNull: true, 
      isEmail: true,
      isLowercase: true
    }
  },
  password: {
    type: Sequelize.STRING
  }},
  {
    timestamps: false
  }
)
