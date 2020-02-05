const database = require('../database');

exports.list = async (ctx) => {
  const options = {};

  const chats = await database.Chat.findAll(options);

  const response = {
    results: chats,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const chat = await database.Chat.create({ message: params.message });

  ctx.body = chat;
  ctx.status = 201;
};
