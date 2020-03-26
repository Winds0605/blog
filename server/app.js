const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const koaBody = require("koa-body")
const registerRouter = require('./routes')
const catchError = require('./middlewares/exception')
const cor = require('./middlewares/cor')
const log = require('./middlewares/log')


const app = new Koa()



app.use(bodyParser())
    .use(koaBody({
        multipart: true,
        formidable: {
            maxFieldsSize: 10 * 1024 * 1024,
            multipart: true
        }
    }))
    .use(cor)
    .use(log)
    .use(catchError)
    .use(registerRouter())

const port = 3030;



// 连接数据库
require('./db/connect')

app.listen(port, () => {
    console.log(`Server is running in port: ${port}  :)`.bgMagenta)
});
