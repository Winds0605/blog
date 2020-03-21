const colors = require('colors')

const log = async (ctx, next) => {
    console.log(`[${ctx.request.method}]`.yellow + ' ' + `${ctx.request.url}`.green)
    await next()
}

module.exports = log
