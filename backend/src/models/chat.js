const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const Chat = sequelize.define('chats', {
  message: Sequelize.TEXT,
}, {
  timestamps: true,
});

// toJSON method is automatically called when the object is serialized in Koa
Chat.prototype.toJSON = function toJSON() {
  return {
    // This is a unique id for each chat
    id: this.id,
    // Id and timestamps are generated automatically
    createdAt: this.createdAt,

    // Message was added on the POST request
    message: this.message,
  };
};

module.exports = Chat;
