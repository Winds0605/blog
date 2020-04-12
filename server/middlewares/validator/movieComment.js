const { validatorFn } = require('../../util/util')


const validateFindCommentsById = async (ctx, next) => {
    const rule = {
        page: 'number',
        movieId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateAdd = async (ctx, next) => {
    const rule = {
        movieId: 'string',
        rate: 'number',
        author: 'string',
        content: 'string',
    };
    return validatorFn(ctx, next, rule)

}

const validateAddSubComment = async (ctx, next) => {
    const rule = {
        movieId: 'string',
        author: 'string',
        content: 'string',
    };
    return validatorFn(ctx, next, rule)
}

const validateMovieId = async (ctx, next) => {
    const rule = {
        movieId: 'string',
    };
    return validatorFn(ctx, next, rule)
}

const validateCommentId = async (ctx, next) => {
    const rule = {
        commentId: 'string',
    };
    return validatorFn(ctx, next, rule)
}

const validateDeleteSubCommentBySubId = async (ctx, next) => {
    const rule = {
        subId: 'string',
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateFindCommentsById,
    validateAdd,
    validateAddSubComment,
    validateMovieId,
    validateDeleteSubCommentBySubId,
    validateCommentId
}
