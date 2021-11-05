require("dotenv").config();
require('./persist/redis-persistable');

const fastify = require("fastify");
const cookie = require("fastify-cookie");
const { chatRoutes } = require("./routes/chat-route");
const chatSchemas = require("./schemas/chat-schema.json")

const build = (opts = {}) => {
  const app = fastify(opts);

  addSchemas(app, chatSchemas);
  
  let socketOpts = {
    errorHandler: (error, conn, req, reply) => {
      conn.destroy(error)
    },
    options: {
      maxPayload: 1048576,
      verifyClient: function (info, next) {
        next(true) 
      }
    }
  };

  app.register(require('fastify-websocket'), socketOpts)
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