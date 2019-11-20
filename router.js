const Router = require('koa-router')
const router = new Router()
const { Middleware_redis } = require('./middle.js')

// router.get('/', Middleware_1, (ctx, next) => {
//   ctx.status = 200
//   ctx.body = { msg: 'Hello World' }
// })

// router.get('/kong', Middleware_2, (ctx, next) => {
//   ctx.status = 200
//   console.log(ctx.query)
//   ctx.body = { msg: 'Hello kong' }
// })

// router.get('/kong/:name', ctx => {
//   ctx.status = 200
//   ctx.body = { msg: 'Hello redis' }
// })

router.get('/status-tracking/:id', Middleware_redis(30), ctx => {
  ctx.status = 200
  ctx.body = {
    txt: 'test data',
  }
})

module.exports = router
