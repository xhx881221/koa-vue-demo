const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');

app.use(koaBody()).use(cors());

// 设置路由前缀
router.prefix('/api');

// 访问路由路径`/api/`的处理函数
router.get('/', ctx => {
    console.log(ctx)
    console.log(ctx.request);
    ctx.body = 'Hello World,My first koa router';
})

// 访问路由路径`/api/second`的处理函数
router.get('/second', ctx => {
    console.log(ctx)
    console.log(ctx.request);
    ctx.body = 'Hello World,My second koa router';
})

app.use(router.routes());
app.use(router.allowedMethods)
app.listen(3000);