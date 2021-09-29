const xApiHook = async (request, reply) => {
    let xApiHeader = request.headers['x-api-header'];
    console.log(xApiHeader)
    reply.statusCode = 404;
    if(!xApiHeader) throw new Error('Faltou uma header!!');
}

module.exports = { xApiHook };