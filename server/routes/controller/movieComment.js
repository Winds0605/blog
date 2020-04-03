const Router = require('koa-router');
const MovieComments = require('../../models/MovieComments')
const { Success } = require('../../util/http-exception')
const { validateFindCommentsById } = require('../../middlewares/validator/movieComment')
const { uuid } = require('../../util/util')

let router = new Router();

router.prefix('/movieComments')


/**
* @api {post} /movieComments/findCommentById 根据电影ID获取所有评论
* @apiDescription 根据电影ID获取所有评论
* @apiName findCommentById
* @apiGroup MovieComments
* @apiVersion 1.0.0
*/
router.post('/findCommentById', validateFindCommentsById, async (ctx, next) => {
    // 第二个参数前面加-表示不返回这两个字段
    let { page, movieId, pageSize = 5 } = ctx.request.body
    let skip = (page - 1) * pageSize
    let tags = await MovieComments.find({ movieId }, "-_id -__v", { sort: [{ _id: -1 }] }).limit(pageSize).skip(skip)
    let len = await MovieComments.find({ movieId }).countDocuments()
    ctx.body = new Success({
        data: tags,
        total: len
    }, "查询成功")
})


/**
* @api {post} /movieComments/add 增加一条评论
* @apiDescription 增加一条评论
* @apiName add
* @apiGroup MovieComments
* @apiParam {string} author 留言者
* @apiParam {string} articleId 电影id
* @apiParam {string} content 内容
* @apiVersion 1.0.0
*/
router.post('/add', async (ctx, next) => {
    const { movieId, author, content, rate } = ctx.request.body
    const result = await MovieComments.create({
        commentId: uuid(10, 16),
        movieId,
        content,
        rate,
        author,
        avatar: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
    })
    ctx.body = new Success(result, '添加成功');
})

/**
* @api {post} /movieComments/addSubComment 增加一条子留言
* @apiDescription 增加一条子留言
* @apiName addSubMessage
* @apiGroup MovieComments
* @apiParam {string} messageId 被回复的留言id
* @apiParam {string} author 回复人
* @apiParam {string} content 回复内容
* @apiVersion 1.0.0
*/
router.post('/addSubComment', async (ctx, next) => {
    const { commentId, content, author, avatar } = ctx.request.body
    const result = await MovieComments.updateOne(
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



module.exports = router
