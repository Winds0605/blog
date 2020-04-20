const { validatorFn } = require('../../util/util')

const validateRegister = async (ctx, next) => {
    const rule = {
        username: 'string',
        email: 'string',
        password: 'string',
        avatar: 'string',
    }
    return validatorFn(ctx, next, rule)
}

const validateLogin = async (ctx, next) => {
    const rule = {
        email: 'string',
        password: 'string',
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateRegister,
    validateLogin,
}
