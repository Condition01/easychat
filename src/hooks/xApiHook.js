const keys = require('../config/api-keys.json')['keys'], crypto = require('crypto');
const xApiHook = async (request, reply) => {
    let xApiHeader = request.headers['x-api-key'];
    if(xApiHeader) {
        let apiKeyHash = crypto.createHash('sha256').update(xApiHeader).digest('hex');
        if (keys.includes(apiKeyHash)) return;      
    }
    reply.statusCode = 403;
    throw new Error('You have to send a valid X-API-KEY Header.');
}

module.exports = { xApiHook };