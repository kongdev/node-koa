const Redis = require('ioredis')
const client = new Redis()

const Middleware_redis = (duration = 10) => {
  return async function(ctx, next) {
    let key = `__OMS__${ctx.originalUrl || ctx.url}`
    const data = await client.get(key)
    if (!data) {
      await next()
      return await client.set(key, JSON.stringify(ctx.body), 'ex', duration)
    }
    obj = JSON.parse(data)
    obj.cache = true
    ctx.body = obj
  }
}

module.exports = { Middleware_redis }
