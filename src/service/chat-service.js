const redisService = require('./redis-service');
const { v4 } = require('uuid')

const createChat = async (options) => {
    let chatId = v4();

    if(!options)
        options = {};

    if(!options.name)
        options.name = chatId;
    
    if(!options.duration)
        options.duration = 60;

    options.id = chatId;

    await redisService.setKey(`chat:${chatId}`, JSON.stringify(options));

    return options;
}

module.exports = { createChat }