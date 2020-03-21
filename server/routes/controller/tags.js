const Router = require('koa-router');
const Tags = require('../../models/tags')
const { Success, NotFound } = require('../../util/http-exception')
const { isUniqueTitle, hasArticle } = require('../../middlewares/utils')

let router = new Router();

router.prefix('/tags')

/**
* @api {get} /tags/findAll 获取所有分类标签
* @apiDescription 获取所有分类标签
* @apiName findAll
* @apiGroup Tags
* @apiVersion 1.0.0
*/
router.post('/findAll', async (ctx, next) => {
    let tags = await Tags.find({}, "-_id -__v")
    let len = tags[0].length
    ctx.body = new Success({
        data: tags,
        len: len
    }, "查询成功")
})


module.exports = router
