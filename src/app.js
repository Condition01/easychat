require("dotenv").config();

const fastify = require("fastify");
const cookie = require("fastify-cookie");

// const { debug } = require("./routes/debug");
// const { auth } = require("./routes/auth");
// const { me } = require("./routes/me");
const { hello } = require("./routes/hello")

const build = (opts = {}) => {
  const app = fastify(opts);

  app.register(cookie);
  app.register(hello, {prefix: "/hello"})

//   app.register(debug);
//   app.register(me, { prefix: "/v2/me" });
//   app.register(auth, { prefix: "/v2/auth" });

  return app;
};

module.exports = { build };