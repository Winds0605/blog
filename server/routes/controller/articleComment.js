const Router = require('koa-router');
const Comments = require('../../models/ArticleComments')
const { Success } = require('../../util/http-exception')
const {
    validateAddComments,
    validateFindComentsById,
    validateInsertSubComments,
    validateDeleteByArticleId,
    validateDeleteByCommentId,
    validateDeleteSubCommentByCommentId
} = require('../../middlewares/validator/articleComment')
const { Authorization } = require('../../middlewares/utils')
const { uuid } = require('../../util/util')

let router = new Router();

router.prefix('/articleComments')

/**
* @api {post} /articleComments/findCommentsById 根据文章ID获取所有评论
* @apiDescription 根据文章ID获取所有评论
* @apiName findCommentsById
* @apiGroup ArticleComments
* @apiVersion 1.0.0
*/
router.post('/findCommentsById', validateFindComentsById, async (ctx, next) => {
    // 第二个参数前面加-表示不返回这两个字段
    let { page, articleId, pageSize = 5 } = ctx.request.body
    let skip = (page - 1) * pageSize
    let tags = await Comments.find({ articleId }, "-_id -__v", { sort: [{ _id: -1 }] }).limit(pageSize).skip(skip)
    let len = await Comments.find({ articleId }).countDocuments()
    ctx.body = new Success({
        data: tags,
        total: len
    }, "查询成功")
})


/**
* @api {post} /articleComments/add 增加一条评论
* @apiDescription 增加一条评论
* @apiName add
* @apiGroup ArticleComments
* @apiParam {string} author 留言者
* @apiParam {string} articleId 文章id
* @apiParam {string} content 内容
* @apiVersion 1.0.0
*/
router.post('/add', validateAddComments, async (ctx, next) => {
    const { content, articleId, author } = ctx.request.body
    const result = await Comments.create({
        commentId: uuid(10, 16),
        articleId,
        avatar: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
        content,
        author
    })
    ctx.body = new Success(result, '添加成功');
})

/**
* @api {post} /articleComments/addSubComment 增加一条子留言
* @apiDescription 增加一条子留言
* @apiName addSubMessage
* @apiGroup ArticleComments
* @apiParam {string} messageId 被回复的留言id
* @apiParam {string} author 回复人
* @apiParam {string} content 回复内容
* @apiParam {string} [avatar] 头像
* @apiVersion 1.0.0
*/
router.post('/addSubComment', validateInsertSubComments, async (ctx, next) => {
    const { commentId, content, author, avatar } = ctx.request.body
    const result = await Comments.updateOne(
        { commentId },
        {
            $addToSet: {
                "sub": {
                    subId: uuid(10, 16),
                    author,
                    content,
                    avatar: avatar || 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
                    modifyOn: Date.now()
                }
            }
        }
    )
    ctx.body = new Success(result, '添加成功');
})


/**
* @api {post} /articleComments/deleteByArticleId 删除某篇文章的评论
* @apiDescription 删除某篇文章的评论
* @apiName deleteByArticleId
* @apiGroup ArticleComments
* @apiParam {string} articleId 文章id
* @apiVersion 1.0.0
*/
router.post('/deleteByArticleId', Authorization, validateDeleteByArticleId, async (ctx, next) => {
    const { articleId } = ctx.request.body
    const result = await Comments.deleteMany({ articleId })
    ctx.body = new Success(result, '删除成功');
})

/**
* @api {post} /articleComments/deleteByCommentId 删除某个评论
* @apiDescription 删除某个评论
* @apiName deleteByCommentId
* @apiGroup ArticleComments
* @apiParam {string} commentId 文章id
* @apiVersion 1.0.0
*/
router.post('/deleteByCommentId', Authorization, validateDeleteByCommentId, async (ctx, next) => {
    const { commentId } = ctx.request.body
    const result = await Comments.deleteOne({ commentId })
    ctx.body = new Success(result, '删除成功');
})


/**
* @api {post} /articleComments/deleteSubCommentByCommentId 删除某个子评论
* @apiDescription 删除某个子评论
* @apiName deleteSubCommentByCommentId
* @apiGroup ArticleComments
* @apiParam {string} subId 子评论id
* @apiVersion 1.0.0
*/
router.post('/deleteSubCommentByCommentId', Authorization, validateDeleteSubCommentByCommentId, async (ctx, next) => {
    const { subId } = ctx.request.body
    const result = await Comments.updateOne(
        { "sub.subId": subId },
        {
            $pull: {
                'sub': {
                    subId: subId
                }
            }
        }
    )
    ctx.body = new Success(result, '删除成功');
})


module.exports = router
