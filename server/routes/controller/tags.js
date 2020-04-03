const Router = require('koa-router');
const ArticleTags = require('../../models/articleTags')
const MovieTags = require('../../models/movieTags')
const { Success } = require('../../util/http-exception')
const { hasArticleTags, hasMovieTags } = require('../../middlewares/utils')
const { validateAdd } = require('../../middlewares/validator/tag')

let router = new Router();

router.prefix('/tags')

/**
* @api {get} /tags/articleTasfindAll 获取所有文章分类标签
* @apiDescription 获取所有文章分类标签
* @apiName articleTasfindAll
* @apiGroup Tags
* @apiVersion 1.0.0
*/
router.get('/articleTagsfindAll', async (ctx, next) => {
    let tags = await ArticleTags.find({}, "-_id -__v")
    ctx.body = new Success({
        data: tags,
    }, "查询成功")
})

/**
* @api {post} /tags/articleTasAdd 添加文章分类标签
* @apiDescription 添加文章分类标签
* @apiName articleTasAdd
* @apiGroup Tags
* @apiVersion 1.0.0
*/
router.post('/articleTagsAdd', validateAdd, hasArticleTags, async (ctx, next) => {
    const { type } = ctx.request.body
    let result = await ArticleTags.create({
        type
    })
    ctx.body = new Success({
        data: result
    }, "新增成功")
})

/**
* @api {get} /tags/movieTasfindAll 获取所有电影分类标签
* @apiDescription 获取所有电影分类标签
* @apiName movieTasfindAll
* @apiGroup Tags
* @apiVersion 1.0.0
*/
router.get('/movieTagsfindAll', async (ctx, next) => {
    let tags = await MovieTags.find({}, "-_id -__v")
    ctx.body = new Success({
        data: tags,
    }, "查询成功")
})

/**
* @api {post} /tags/movieTasAdd 添加文章分类标签
* @apiDescription 添加电影分类标签
* @apiName movieTasAdd
* @apiGroup Tags
* @apiVersion 1.0.0
*/
router.post('/movieTagsAdd', validateAdd, hasMovieTags, async (ctx, next) => {
    const { type } = ctx.request.body
    let result = await MovieTags.create({
        type
    })
    ctx.body = new Success({
        data: result
    }, "新增成功")
})

module.exports = router
