// const { getHello } = require("../controllers/helloController");

const { getHello, postHello, postHelloWithSchema } = require("../controllers/helloController");
const { xApiHook } = require("../hooks/xApiHook");
const helloSchema = require("../schemas/helloSchemas.json");

const hello = (fastify, _, done) => {
    fastify.addHook("onRequest", xApiHook);

    fastify.get("/", getHello);
    fastify.post("/", postHello);
    fastify.route({
        method: 'POST',
        url: '/with-schema',
        handler: postHelloWithSchema,
        schema: {
            body: helloSchema['getSchema'],
        }
    });
    fastify.post("/with-schema2", {schema: {body: helloSchema['getSchema']}}, postHelloWithSchema);

    done();
};

module.exports = { hello };