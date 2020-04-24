const { validatorFn } = require('../../util/util')

const validateMovieId = async (ctx, next) => {
    const rule = {
        movieId: 'string',
    };
    return validatorFn(ctx, next, rule)
}

const validateAdd = async (ctx, next) => {
    const rule = {
        name: 'string',
        image: 'string',
        director: 'string',
        country: 'array',
        type: 'array',
        rate: 'number',
        introduction: 'string',
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateMovieId,
    validateAdd
}
