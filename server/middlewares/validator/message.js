const { validatorFn } = require('../../util/util')

const validateFindAll = async (ctx, next) => {
    const rule = {
        page: 'number'
    };
    return validatorFn(ctx, next, rule)
}

const validateDeleteByMessageId = async (ctx, next) => {
    const rule = {
        messageId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateDeleteSubMessageBySubId = async (ctx, next) => {
    const rule = {
        subId: 'string'
    };
    return validatorFn(ctx, next, rule)
}

const validateMessages = async (ctx, next) => {
    const rule = {
        author: 'string',
        content: 'string'
    };
    return validatorFn(ctx, next, rule)
}


const validateInsertSubMessages = async (ctx, next) => {
    const rule = {
        messageId: 'string',
        content: 'string',
        author: 'string'
    };
    return validatorFn(ctx, next, rule)
}

module.exports = {
    validateMessages,
    validateFindAll,
    validateInsertSubMessages,
    validateDeleteByMessageId,
    validateDeleteSubMessageBySubId
}
