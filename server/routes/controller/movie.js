const Router = require('koa-router');
const Movie = require('../../models/Movie')
const { validateMovieId, validateAdd } = require('../../middlewares/validator/movie')
const { hasMovie } = require('../../middlewares/utils')
const { Success } = require('../../util/http-exception')
const { uuid } = require('../../util/util')

let router = new Router();

router.prefix('/movies')

/**
* @api {get} /movies/findAll 获取所有电影数据
* @apiDescription 获取所有电影数据
* @apiName findAll
* @apiGroup Movies
* @apiVersion 1.0.0
*/
router.get('/findAll', async (ctx, next) => {
    let movies = await Movie.find({}, "-_id -__v", { sort: [{ _id: -1 }] })
    let len = await Movie.find({}).countDocuments()
    ctx.body = new Success({
        data: movies,
        total: len
    }, "查询成功")
})

/**
* @api {post} /movies/findById 获取单个电影数据
* @apiDescription 获取单个电影数据
* @apiName findById
* @apiGroup Movies
* @apiParam {string} movieId 电影ID
* @apiVersion 1.0.0
*/
router.post('/findById', validateMovieId, hasMovie, async (ctx, next) => {
    const { movieId } = ctx.request.body
    let movies = await Movie.findOne({ movieId })
    ctx.body = new Success({
        data: movies
    }, "查询成功")
})

/**
* @api {post} /movies/add 添加一部电影
* @apiDescription 添加一部电影
* @apiName add
* @apiGroup Movies
* @apiParam {string} name 电影ID
* @apiParam {string} image 电影ID
* @apiParam {string} director 电影导演
* @apiParam {array} country 制作地区/国家
* @apiParam {array} type 电影类型
* @apiParam {number} rate 电影评分
* @apiParam {string} introduction 电影介绍
* @apiVersion 1.0.0
*/
router.post('/add', validateAdd, hasMovie, async (ctx, next) => {
    const { name, image, director, country, type, rate, introduction } = ctx.request.body
    const result = await Movie.create({
        movieId: uuid(10, 16),
        name,
        image,
        director,
        country,
        type,
        rate,
        introduction
    })
    ctx.body = new Success(result, '添加成功');
})

/**
* @api {post} /movies/delete 删除一部电影
* @apiDescription 删除一部电影
* @apiName delete
* @apiGroup Movies
* @apiParam {string} movieId 电影id
* @apiVersion 1.0.0
*/
router.post('/delete', validateMovieId, hasMovie, async (ctx, next) => {
    const { movieId } = ctx.request.body
    let result = await Movie.deleteOne({ movieId })
    ctx.body = new Success({
        data: result
    }, '删除成功');
})

/**
* @api {post} /movies/edit 编辑一部电影
* @apiDescription 编辑一部电影
* @apiName edit
* @apiGroup Movie
* @apiParam {string} movieId 电影id
* @apiParam {string} name 电影名称
* @apiParam {string} image 电影图片
* @apiParam {string} director 电影导演
* @apiParam {array} country 制作国家
* @apiParam {array} type 电影类型
* @apiParam {number} rate 电影评分
* @apiParam {string} introduction 电影简介
* @apiVersion 1.0.0
*/
router.post('/edit', validateAdd, hasMovie, async (ctx, next) => {
    const { movieId, name, image, director, country, type, rate, introduction } = ctx.request.body
    let result = await Movie.updateOne(
        { movieId },
        {
            $set: {
                name,
                image,
                director,
                country,
                type,
                rate,
                introduction
            }
        }
    )
    ctx.body = new Success({
        data: result
    }, '修改成功');
})

module.exports = router
