const Router = require('koa-router');
const Movie = require('../../models/movie')
const { Success } = require('../../util/http-exception')
const { uuid } = require('../../util/util')

let router = new Router();

router.prefix('/movies')

/**
* @api {post} /movies/findAll 获取所有电影数据
* @apiDescription 获取所有电影数据
* @apiName findAll
* @apiGroup Movies
* @apiVersion 1.0.0
*/
router.post('/findAll', async (ctx, next) => {
    const { length } = ctx.request.body
    let movies = await Movie.find({}, "-_id -__v", { sort: [{ _id: -1 }] }).limit(length)
    let len = await Movie.find({}).countDocuments()
    ctx.body = new Success({
        data: movies,
        total: len
    }, "查询成功")
})

/**
* @api {post} /movies/add 添加一部电影
* @apiDescription 添加一部电影
* @apiName add
* @apiGroup Movies
* @apiVersion 1.0.0
*/
router.post('/add', async (ctx, next) => {
    const { name, image, director, country, type, rate, Introduction, review } = ctx.request.body
    const result = await Movie.create({
        movieId: uuid(10, 16),
        name,
        image,
        director,
        country,
        type,
        rate,
        Introduction,
        review
    })
    ctx.body = new Success(result, '添加成功');
})

module.exports = router
