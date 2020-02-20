const database = require('../database');

exports.list = async (ctx) => {
  const options = {};

  const events = await database.SensorEntry.findAll(options);

  const response = {
    results: events,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const sensor = await database.SensorEntry.create({
    temperature: params.temperature,
    humidity: params.humidity,
  });

  ctx.body = sensor;
  ctx.status = 201;
};
