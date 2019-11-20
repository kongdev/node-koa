const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const indexRoute = require('./router.js')
const app = new Koa()

app.use(bodyParser())

app.use(indexRoute.routes())

app.listen(5555, () => {
  console.log('Koa app listening')
})
