const redisService = require('../service/redis-service');

const getKey = async (request, reply) => {
    return await redisService.getKey(request.params.key);
}

const setKey = async (request, reply) => {
    return await redisService.setKey(request.body.key, request.body.value);
}

module.exports = { getKey, setKey }