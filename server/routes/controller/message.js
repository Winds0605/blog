const Router = require('koa-router');
const Messages = require('../../models/messages')
const { Success } = require('../../util/http-exception')
const {
    validateMessages,
    validateFindAll,
    validateInsertSubMessages
} = require('../../middlewares/validator/message')

let router = new Router();

router.prefix('/messages')

/**
* @api {post} /messages/findAll 获取所有留言
* @apiDescription 获取所有留言
* @apiName findAll
* @apiGroup Messages
* @apiVersion 1.0.0
*/
router.post('/findAll', validateFindAll, async (ctx, next) => {
    // 第二个参数前面加-表示不返回这两个字段
    let { page } = ctx.request.body
    let skip = (page - 1) * 5
    let tags = await Messages.find({}, "-_id -__v", { sort: [{ _id: -1 }] }).limit(5).skip(skip)
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
* @apiParam {string} author 留言者
* @apiParam {string} avatar 头像
* @apiParam {string} content 内容
* @apiVersion 1.0.0
*/
router.post('/add', validateMessages, async (ctx, next) => {
    const { author, content } = ctx.request.body
    const result = await Messages.create({
        messageId: Math.floor(Math.random() * 10000000000),
        avatar: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png',
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
* @apiVersion 1.0.0
*/
router.post('/addSubMessage', validateInsertSubMessages, async (ctx, next) => {
    const { messageId, content, author } = ctx.request.body
    const result = await Messages.updateOne(
        { messageId },
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
