require("dotenv").config();
require('./persist/redis-persistable');

const fastify = require("fastify");
const cookie = require("fastify-cookie");
const { chatRoutes } = require("./routes/chat-route");
const chatSchemas = require("./schemas/chat-schema.json")

const build = (opts = {}) => {
  const app = fastify(opts);

  addSchemas(app, chatSchemas);

  app.register(require('fastify-websocket'), {
    errorHandler: (error, conn, req, reply) => {
      conn.destroy(error)
    },
    options: {
      maxPayload: 1048576,
      verifyClient: function (info, next) {
        console.log("passou!!");
        // if (info.req.headers['x-fastify-header'] !== 'fastify is awesome !') {
        //   return next(false) 
        // }
        next(true) 
      }
    }
  })

  app.register(cookie);
  app.register(chatRoutes, { prefix: "/chat" });

  return app;
};

function addSchemas(app, schemas) {
  schemas.forEach(item => {
    app.addSchema(item);
  });
}

module.exports = { build };