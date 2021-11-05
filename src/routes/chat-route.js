const chatController = require("../controllers/chat-controller");
const { xApiHook } = require("../hooks/xApiHook");

const chatRoutes = (fastify, _, done) => {
    // fastify.addHook("onRequest", xApiHook);

    fastify.post("/create", chatController.createChat);
    fastify.get("/connect",  { websocket: true }, chatController.connectToChat);    

    done();
};

module.exports = { chatRoutes };