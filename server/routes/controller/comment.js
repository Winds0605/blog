const Router = require('koa-router');
const Comments = require('../../models/comments')
const { Success } = require('../../util/http-exception')
const {
    validateComments,
    validateFindById,
    validateInsertSubComments
} = require('../../middlewares/validator/comment')

let router = new Router();

router.prefix('/comments')

/**
* @api {post} /comments/findComentsById 根据文章ID获取所有评论
* @apiDescription 根据文章ID获取所有评论
* @apiName findComentsById
* @apiGroup Comments
* @apiVersion 1.0.0
*/
router.post('/findComentsById', validateFindById, async (ctx, next) => {
    // 第二个参数前面加-表示不返回这两个字段
    let { page, articleId } = ctx.request.body
    let skip = (page - 1) * 5
    let tags = await Comments.find({ articleId }, "-_id -__v", { sort: [{ _id: -1 }] }).limit(5).skip(skip)
    let len = await Comments.find({ articleId }).countDocuments()
    ctx.body = new Success({
        data: tags,
        total: len
    }, "查询成功")
})


/**
* @api {post} /comments/add 增加一条评论
* @apiDescription 增加一条评论
* @apiName findAll
* @apiGroup Comments
* @apiParam {string} author 留言者
* @apiParam {string} articleId 文章id
* @apiParam {string} content 内容
* @apiVersion 1.0.0
*/
router.post('/add', validateComments, async (ctx, next) => {
    const { content, articleId, author } = ctx.request.body
    const result = await Comments.create({
        commentId: Math.floor(Math.random() * 10000000000),
        articleId,
        avatar: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
        content,
        author
    })
    ctx.body = new Success(result, '添加成功');
})

/**
* @api {post} /comments/addSubComment 增加一条子留言
* @apiDescription 增加一条子留言
* @apiName addSubMessage
* @apiGroup Comment
* @apiParam {string} messageId 被回复的留言id
* @apiVersion 1.0.0
*/
router.post('/addSubComment', validateInsertSubComments, async (ctx, next) => {
    const { commentId, content, author } = ctx.request.body
    const result = await Comments.updateOne(
        { commentId },
        {
            $addToSet: {
                "sub": {
                    author,
                    content,
                    avatar: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
                    modifyOn: Date.now()
                }
            }
        }
    )
    ctx.body = new Success(result, '添加成功');
})

module.exports = router
