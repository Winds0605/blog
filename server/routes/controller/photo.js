const Router = require('koa-router');
const { Success } = require('../../util/http-exception')
const Photo = require('../../models/Photo')
const jwtAuth = require('koa-jwt')
const { key } = require('../../util/config')
const { Authorization } = require('../../middlewares/utils')

let router = new Router();

router.prefix('/photo')

/**
* @api {get} /photo/findAll 获取所有照片
* @apiDescription 获取所有照片
* @apiName findAll
* @apiGroup Photo
* @apiVersion 1.0.0
*/
router.get('/findAll', jwtAuth({ secret: key, passthrough: true }), async (ctx, next) => {
    const result = await Photo.find({})
    const len = await Photo.find({}).countDocuments()
    ctx.body = new Success({
        data: result,
        total: len
    })
})


/**
* @api {post} /photo/delete 删除照片
* @apiDescription 删除照片
* @apiName delete
* @apiGroup Photo
* @apiVersion 1.0.0
*/
router.post('/delete', Authorization, async (ctx, next) => {
    const { url } = ctx.request.body
    const result = await Photo.deleteOne({ url })
    ctx.body = new Success({
        data: result
    })
})


/**
* @api {post} /photo/add 删除照片
* @apiDescription 删除照片
* @apiName add
* @apiGroup Photo
* @apiVersion 1.0.0
*/
router.post('/add', Authorization, async (ctx, next) => {
    const { imgList } = ctx.request.body
    const result = await Photo.create(imgList)
    ctx.body = new Success({
        data: result
    })
})


module.exports = router
