const chatService = require('../service/chat-service');

const createChat = async (request, reply) => {
    let options = request.body;
    return await chatService.createChat(options);
}

const connectToChat = async (connection, req) => {
    console.log("CONNECTION-->");
    console.log(connection);
    connection.socket.on('message', message => {
        // message.toString() === 'hi from client'
        connection.socket.send(message)
    })
}

module.exports = { createChat, connectToChat }