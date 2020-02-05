const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  // This path is relative to /backend folder unlike with require
  storage: './db/chat.sqlite',
});

module.exports = sequelize;
