const Router = require('koa-router');
const fs = require('fs')
const util = require('util');
const { Success } = require('../../util/http-exception')
const { uuid } = require('../../util/util')

let router = new Router();

router.prefix('/other')

/**
* @api {get} /tags/findAll 获取所有分类标签
* @apiDescription 获取所有分类标签
* @apiName findAll
* @apiGroup Tags
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

router.post('/transform', async (ctx, next) => {
    const file = ctx.request.files.file;
    const reader = fs.createReadStream(file.path);
    let filePath = __dirname + "/static/file";
    let fileResource = filePath + `/${uuid(8, 16)}-${file.name}`;

    if (!fs.existsSync(filePath)) {
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
    let path = __dirname + '/static/file/' + fileResource.slice(fileResource.lastIndexOf('/') + 1)

    const readFile = util.promisify(fs.readFile);
    const data = await readFile(path, 'utf8')
    ctx.body = new Success({
        data
    })
})


module.exports = router
