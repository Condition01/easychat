
const getHello = async (request, reply) => {
    return { hello: "GET world!" };
}

const postHello = async (request, reply) => {
    return { hello: "POST world!" };
}

const postHelloWithSchema = async (request, reply) => {
    return { hello: request.body.hello };
}

module.exports = { getHello, postHello, postHelloWithSchema }