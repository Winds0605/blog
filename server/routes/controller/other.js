const Router = require('koa-router');
const fs = require('fs')
const { Success } = require('../../util/http-exception')
const { uuid } = require('../../util/util')
const Photo = require('../../models/Photo')

let router = new Router();

router.prefix('/tools')

/**
* @api {post} /other/uploadImg 上传图片返回路径
* @apiDescription 上传图片返回路径
* @apiName uploadImg
* @apiGroup other
* @apiVersion 1.0.0
*/
router.post('/uploadImg', async (ctx, next) => {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    let filePath = __dirname + "/static/img";
    let fileResource = filePath + `/${uuid(8, 16)}-${file.name}`;

    if (!fs.existsSync(filePath)) {  //判断staic/upload文件夹是否存在，如果不存在就新建一个
        fs.mkdir(filePath, (err) => {
            if (err) {
                throw new Error(err)
            } else {
                let upstream = fs.createWriteStream(fileResource);
                reader.pipe(upstream);
            }
        })
    } else {
        let upstream = fs.createWriteStream(fileResource)
        reader.pipe(upstream);
    }
    ctx.body = new Success({
        data: fileResource
    }, '上传成功')
})



/**
* @api {post} /other/transform 读取文件内容
* @apiDescription 读取文件内容
* @apiName transform
* @apiGroup other
* @apiVersion 1.0.0
*/
router.post('/transform', async (ctx, next) => {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    const getData = () => {
        return new Promise(function (resolve, reject) {
            reader.on('data', function (data) {
                resolve(data.toString())
            })
        })
    }
    const data = await getData()
    ctx.body = new Success({
        data
    })
})

/**
* @api {post} /other/get 读取文件内容
* @apiDescription 读取文件内容
* @apiName transform
* @apiGroup other
* @apiVersion 1.0.0
*/
router.post('/getPhoto', async (ctx, next) => {
    const { page, pageSize = 10 } = ctx.request.body
    const skip = (page - 1) * pageSize
    const result = await Photo.find({}).limit(pageSize).skip(skip)
    const len = await Photo.find({}).countDocuments()
    ctx.body = new Success({
        data: result,
        total: len
    })
})

module.exports = router
