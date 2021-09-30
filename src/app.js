require("dotenv").config();
require('./persist/redis-persistable');

const fastify = require("fastify");
const cookie = require("fastify-cookie");

const { redisRoutes } = require("./routes/redis-route");

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(cookie);
  app.register(redisRoutes, {prefix: "/redis"})

  return app;
};

module.exports = { build };