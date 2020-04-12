const { validatorFn } = require('../../util/util')

const validateFindComentsById = async (ctx, next) => {
    const rule = {
        page: 'number',
        articleId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateInsertSubComments = async (ctx, next) => {
    const rule = {
        commentId: 'string',
        content: 'string',
        author: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateAddComments = async (ctx, next) => {
    const rule = {
        content: 'string',
        articleId: 'string',
        author: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateDeleteByArticleId = async (ctx, next) => {
    const rule = {
        articleId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

// deleteByCommentId
const validateDeleteByCommentId = async (ctx, next) => {
    const rule = {
        commentId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateDeleteSubCommentByCommentId = async (ctx, next) => {
    const rule = {
        subId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateFindComentsById,
    validateInsertSubComments,
    validateAddComments,
    validateDeleteByArticleId,
    validateDeleteByCommentId,
    validateDeleteSubCommentByCommentId
}
