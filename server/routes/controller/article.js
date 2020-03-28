const Router = require('koa-router');
const Articles = require('../../models/articles')
const { Success, NotFound } = require('../../util/http-exception')
const { isUniqueTitle, hasArticle } = require('../../middlewares/utils')
const { validateAdd, validateFindById, validateEdit } = require('../../middlewares/validator/article')
const { uuid } = require('../../util/util')
let router = new Router();

router.prefix('/articles')

/**
* @api {get} /articles/findAll 获取所有文章
* @apiDescription 获取所有文章
* @apiName findAll
* @apiGroup Article
* @apiVersion 1.0.0
*/
router.get('/findAll', async (ctx, next) => {
    let articles = await Articles.find({}, "-_id -__v", { sort: [{ '_id': - 1 }] })
    let len = articles.length
    ctx.body = new Success({
        data: articles,
        total: len
    }, "查询成功")
})

/**
* @api {post} /articles/findById 获取某篇文章信息
* @apiDescription 获取某篇文章信息
* @apiName findById
* @apiGroup Article
* @apiParam {string} articleId 文章id
* @apiVersion 1.0.0
*/
router.post('/findById', validateFindById, async (ctx, next) => {
    const { articleId } = ctx.request.body
    let result = await Articles.findOne({
        articleId
    })
    if (result) {
        ctx.body = new Success({
            data: result
        }, '查询成功')
    } else {
        ctx.body = new NotFound()
    }
})

/**
* @api {post} /articles/findByPage 分页数据
* @apiDescription 分页数据
* @apiName findByPage
* @apiGroup Article
* @apiVersion 1.0.0
*/
router.post('/findByPage', async (ctx, next) => {
    const { page, tag } = ctx.request.body
    const skip = (page - 1) * 10
    let articles;
    let len;
    try {
        if (tag === 'All') {
            articles = await Articles.find({}, "-_id -__v", { sort: [{ _id: -1 }] }).limit(10).skip(skip)
            len = await Articles.find({}).countDocuments()
        } else {
            articles = await Articles.find({ tag }, "-_id -__v", { sort: [{ _id: -1 }] }).limit(10).skip(skip)
            len = await Articles.find({ tag }).countDocuments()
        }
    } catch (error) {
        throw error
    }
    ctx.body = new Success({
        data: articles,
        total: len
    }, "查询成功")
})



/**
* @api {post} /articles/add 添加一篇文章
* @apiDescription 添加一篇文章
* @apiName add
* @apiGroup Article
* @apiParam {string} title 文章标题
* @apiParam {string} content 文章内容
* @apiParam {string} desc 文章简介
* @apiVersion 1.0.0
*/
router.post('/add', validateAdd, isUniqueTitle, async (ctx, next) => {
    const { title, content, desc, banner, tag } = ctx.request.body
    let result = await Articles.create({
        articleId: uuid(10, 16),
        title,
        content,
        banner,
        tag,
        desc
    })
    ctx.body = new Success({
        data: result
    }, '添加成功');
})

/**
* @api {post} /articles/delete 删除一篇文章
* @apiDescription 删除一篇文章
* @apiName delete
* @apiGroup Article
* @apiParam {string} articleId 文章id
* @apiVersion 1.0.0
*/
router.post('/delete', validateFindById, hasArticle, async (ctx, next) => {
    const { articleId } = ctx.request.body
    let result = await Articles.deleteOne({ articleId })
    ctx.body = new Success({
        data: result
    }, '删除成功');
})

/**
* @api {post} /articles/delete 删除一篇文章
* @apiDescription 删除一篇文章
* @apiName delete
* @apiGroup Article
* @apiParam {string} articleId 文章id
* @apiVersion 1.0.0
*/
router.post('/edit', validateEdit, hasArticle, async (ctx, next) => {
    const { articleId, title, content, desc, banner, tag } = ctx.request.body
    let result = await Articles.updateOne(
        { articleId },
        {
            $set: {
                title,
                content,
                desc,
                banner,
                tag
            }
        }
    )
    ctx.body = new Success({
        data: result
    }, '修改成功');
})

/**
* @api {post} /articles/addViews 增加某篇文章阅读数
* @apiDescription 增加某篇文章阅读数
* @apiName addViews
* @apiGroup Article
* @apiParam {string} articleId 文章id
* @apiVersion 1.0.0
*/
router.post('/addViews', validateFindById, hasArticle, async (ctx, next) => {
    const { articleId } = ctx.request.body
    let result = await Articles.updateOne(
        { articleId },
        // $inc如果没有对应对段就直接赋值，如果有在原来的值上加上该值
        { $inc: { views: 1 } }
    )

    ctx.body = new Success({
        data: result
    }, '修改成功')

})

module.exports = router
