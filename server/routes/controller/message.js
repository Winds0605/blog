const Router = require('koa-router');
const Messages = require('../../models/messages')
const { Success } = require('../../util/http-exception')
const { uuid } = require('../../util/util')
const {
    validateMessages,
    validateFindAll,
    validateInsertSubMessages,
    validateDeleteByMessageId,
    validateDeleteSubMessageBySubId
} = require('../../middlewares/validator/message')

let router = new Router();

router.prefix('/messages')

/**
* @api {post} /messages/findAll 获取所有留言
* @apiDescription 获取所有留言
* @apiName findAll
* @apiGroup Messages
* @apiParam {number} page 页码
* @apiParam {number} [pageSize] 内容长度
* @apiVersion 1.0.0
*/
router.post('/findAll', validateFindAll, async (ctx, next) => {
    // 第二个参数前面加-表示不返回这两个字段
    let { page, pageSize = 5 } = ctx.request.body
    let skip = (page - 1) * pageSize
    let tags = await Messages.find({}, "-_id -__v", { sort: [{ _id: -1 }] }).limit(pageSize).skip(skip)
    let len = await Messages.find({}).countDocuments()
    ctx.body = new Success({
        data: tags,
        total: len
    }, "查询成功")
})


/**
* @api {post} /messages/add 增加一条留言
* @apiDescription 增加一条留言
* @apiName findAll
* @apiGroup Messages
* @apiParam {string} author 留言人
* @apiParam {string} content 留言内容
* @apiParam {string} [avatar] 头像
* @apiVersion 1.0.0
*/
router.post('/add', validateMessages, async (ctx, next) => {
    const { author, content, avatar } = ctx.request.body
    const result = await Messages.create({
        messageId: uuid(10, 16),
        avatar: avatar || 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
        author,
        content
    })
    ctx.body = new Success(result, '添加成功');
})

/**
* @api {post} /messages/addSubMessage 增加一条子留言
* @apiDescription 增加一条子留言
* @apiName addSubMessage
* @apiGroup Comment
* @apiParam {string} messageId 被回复的留言id
* @apiParam {string} content 回复内容
* @apiParam {string} author 留言人
* @apiParam {string} [avatar] 头像
* @apiVersion 1.0.0
*/
router.post('/addSubMessage', validateInsertSubMessages, async (ctx, next) => {
    const { messageId, content, author, avatar } = ctx.request.body
    const result = await Messages.updateOne(
        { messageId },
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
* @api {post} /messages/deleteByMessageId 删除某个留言
* @apiDescription 删除某个留言
* @apiName deleteByMessageId
* @apiGroup Messages
* @apiParam {string} messageId 留言id
* @apiVersion 1.0.0
*/
router.post('/deleteByMessageId', validateDeleteByMessageId, async (ctx, next) => {
    const { messageId } = ctx.request.body
    const result = await Messages.deleteOne({ messageId })
    ctx.body = new Success(result, '删除成功');
})


/**
* @api {post} /articleComments/deleteSubMessageBySubId 删除某个子留言
* @apiDescription 删除某个子留言
* @apiName deleteSubMessageBySubId
* @apiGroup ArticleComments
* @apiParam {string} subId 子评论id
* @apiVersion 1.0.0
*/
router.post('/deleteSubMessageBySubId', validateDeleteSubMessageBySubId, async (ctx, next) => {
    const { subId } = ctx.request.body
    const result = await Messages.updateOne(
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
