const { validatorFn } = require('../../util/util')

const validateAdd = async (ctx, next) => {
    const rule = {
        title: 'string',
        content: 'string',
        desc: 'string',
        banner: 'string',
        tag: 'string'
    }
    return validatorFn(ctx, next, rule)
}

const validateFindById = async (ctx, next) => {
    const rule = {
        articleId: 'string',
    };
    return validatorFn(ctx, next, rule)
}

const validateEdit = async (ctx, next) => {
    const rule = {
        articleId: 'string',
        title: 'string',
        content: 'string',
        desc: 'string',
        banner: 'string',
        tag: 'string'
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateAdd,
    validateFindById,
    validateEdit
}
