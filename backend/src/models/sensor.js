const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const SensorEntry = sequelize.define('sensor_entries', {
  temperature: Sequelize.FLOAT,
  humidity: Sequelize.FLOAT,
}, {
  timestamps: true,
});

// toJSON method is automatically called when the object is serialized in Koa
SensorEntry.prototype.toJSON = function toJSON() {
  return {
    // This is a unique id for each sensor entry
    id: this.id,
    // Id and timestamps are generated automatically
    timestamp: this.createdAt,

    temperature: this.temperature,
    humidity: this.humidity,
  };
};

module.exports = SensorEntry;
