const { getAsync, setAsync } = require('../persist/redis-persistable');
const { promisify } = require("util");

const setKey = async (key, value) => {
    let result = await setAsync(key, value);
    if (result !== 'OK') throw new Error(`Error while setting key: ${key}`);
    return { key: key, value: value };
}

const getKey = async (key) => {
    let result = await getAsync(key);
    if (result === null) throw new Error(`Error while getting key: ${key}`);
    return { key: key, value: result };
}

module.exports = { setKey, getKey }