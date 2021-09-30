const { getKey, setKey } = require("../controllers/redis-controller");
const { xApiHook } = require("../hooks/xApiHook");

const redisRoutes = (fastify, _, done) => {
    fastify.addHook("onRequest", xApiHook);

    fastify.post("/", setKey);
    fastify.get("/:key", getKey);
    
    done();
};

module.exports = { redisRoutes };