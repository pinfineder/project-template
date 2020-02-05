const database = require('../database');

exports.list = async (ctx) => {
  const options = {};

  const sensors = await database.SensorEntry.findAll(options);

  const response = {
    results: sensors,
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
