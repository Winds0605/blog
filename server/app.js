const Koa = require('koa')
const koaBody = require("koa-body")
const registerRouter = require('./routes')
const catchError = require('./middlewares/exception')
const cor = require('./middlewares/cor')
const log = require('./middlewares/log')
const authorization = require('./middlewares/authorization')
const { port } = require('./util/config')

const app = new Koa()


// koaBody 解析上传的文件 
app
    .use(authorization)
    .use(koaBody({
        multipart: true,
        formidable: {
            maxFieldsSize: 10 * 1024 * 1024,
            multipart: true
        }
    }))

    .use(authorization) // 验证中间件
    .use(cor) // 跨域中间件
    .use(log) // 请求url中间件
    .use(catchError) // 错误处理中间件
    .use(registerRouter()) //路由注册

// 连接数据库
require('./db/connect')

app.listen(port, () => {
    console.log(`Server is running in port: ${port}  :)`.bgMagenta)
});
