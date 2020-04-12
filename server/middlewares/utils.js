const { NotFound, Forbid } = require('../util/http-exception')
const Articles = require('../models/articles')
const ArticleTags = require('../models/articleTags')
const MovieTags = require('../models/movieTags')
const Movie = require('../models/Movie')



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

const hasMovie = async (ctx, next) => {
    const { movieId } = ctx.request.body
    const result = await Movie.findOne({
        movieId
    })
    if (!result) ctx.body = new NotFound("不存在该电影")
    else await next()
}

const hasArticleTags = async (ctx, next) => {
    const { type } = ctx.request.body
    const result = await ArticleTags.findOne({
        type
    })
    if (result) ctx.body = new Forbid("已存在该文章分类标签")
    else await next()
}

const hasMovieTags = async (ctx, next) => {
    const { type } = ctx.request.body
    const result = await MovieTags.findOne({
        type
    })
    if (result) ctx.body = new Forbid("已存在该文章分类标签")
    else await next()
}

module.exports = {
    isUniqueTitle,
    hasArticle,
    hasArticleTags,
    hasMovieTags,
    hasMovie
}
