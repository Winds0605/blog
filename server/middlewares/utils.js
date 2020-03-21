const { NotFound } = require('../util/http-exception')
const Articles = require('../models/articles')



const isUniqueTitle = async (ctx, next) => {
    const { title } = ctx.request.body
    const result = await Articles.findOne({
        title
    })
    if (result) ctx.body = new NotFound("已经存在相同标题")
    else await next()
}

const hasArticle = async (ctx, next) => {
    const { articleId } = ctx.request.body
    const result = await Articles.findOne({
        articleId
    })
    if (!result) ctx.body = new NotFound("不存在该文章")
    else await next()
}

module.exports = {
    isUniqueTitle,
    hasArticle
}
