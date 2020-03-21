const Parameter = require('parameter');
const { ParameterException } = require('../../util/http-exception')

const parameter = new Parameter({
    validateRoot: true, // restrict the being validate value must be a object
});

const validateFindAll = async (ctx, next) => {
    const rule = {
        page: 'number'
    };
    const errors = parameter.validate(rule, ctx.request.body);

    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateInsertSubMessages = async (ctx, next) => {
    const rule = {
        messageId: 'string',
        content: 'string',
        author: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);

    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateMessages = async (ctx, next) => {
    const rule = {
        author: 'string',
        content: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

module.exports = {
    validateMessages,
    validateFindAll,
    validateInsertSubMessages
}
