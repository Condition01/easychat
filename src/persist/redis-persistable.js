const redis = require("redis");
const { promisify } = require("util");

const redisHost = process.env.NODE_ENV === 'prod' ? process.env.REDIS_HOST : 'localhost';
const redisClient = redis.createClient({
    host: redisHost,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS
});

redisClient.on("error", function (error) {
    console.error(error);
});

redisClient.on('connect', function(stream) {
    console.log('Redis connected!');
})

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

module.exports = { getAsync, setAsync };

