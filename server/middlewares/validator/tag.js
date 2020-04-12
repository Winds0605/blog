const { validatorFn } = require('../../util/util')


const validateType = async (ctx, next) => {
    const rule = {
        type: 'array',
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateType
}
