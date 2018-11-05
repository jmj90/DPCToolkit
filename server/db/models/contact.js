const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  company: {
    type: Sequelize.STRING,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = Contact
