const Router = require('koa-router');
const { Success, NotFound, Forbid } = require('../../util/http-exception')
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { key } = require('../../util/config')
const { uuid } = require('../../util/util')
const { hasEmail } = require('../../middlewares/utils')
const { validateLogin, validateRegister } = require('../../middlewares/validator/user')

let router = new Router();

router.prefix('/user')

/**
* @api {post} /user/register 读取文件内容
* @apiDescription 读取文件内容
* @apiName transform
* @apiGroup User
* @apiVersion 1.0.0
*/
router.post('/register', validateRegister, hasEmail, async (ctx, next) => {
    const { username, email, password, avatar } = ctx.request.body
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const data = await User.create({
        userId: uuid(10, 16),
        username,
        email,
        password: hash,
        avatar: avatar || 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/avata.png'
    })
    ctx.body = new Success({
        data
    })
})


/**
* @api {post} /user/login 登录
* @apiDescription 登录
* @apiName login
* @apiGroup User
* @apiVersion 1.0.0
*/
router.post('/login', validateLogin, async (ctx, next) => {
    const { email, password } = ctx.request.body
    const user = await User.findOne({ email })
    if (!user) {
        ctx.body = new NotFound('不存在该用户')
        return
    }
    const res = await bcrypt.compare(password, user.password)
    if (res) {
        const rule = {
            username: user.username,
            avatar: user.avatar
        }
        //   jwt.sign("规则","加密名字","过期时间","箭头函数")
        const token = await jwt.sign(rule, key, { expiresIn: 3600 })
        ctx.body = new Success({
            data: {
                token: "Bearer " + token
            }
        }, "登录成功")
    } else {
        ctx.body = new Forbid({}, '密码错误')
    }

})


module.exports = router
