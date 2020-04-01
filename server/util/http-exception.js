class HttpException extends Error {
    constructor(msg = '服务器异常', errorCode = 10000, code = 400) {
        super()
        this.errorCode = errorCode
        this.code = code
        this.msg = msg
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000
    }
}

class Success extends HttpException {
    constructor(data, msg, errorCode) {
        super()
        this.code = 200
        this.data = data.data || {}
        this.total = data.total || 0
        this.msg = msg || 'success'
        this.errorCode = errorCode || 0
    }
}

class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 404
        this.msg = msg || '资源未找到'
        this.errorCode = errorCode || 10000
    }
}

class Forbid extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 403
        this.msg = msg || '资源已存在'
        this.errorCode = errorCode || 10000
    }
}


module.exports = {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    Forbid
}
