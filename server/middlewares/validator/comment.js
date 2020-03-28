const Parameter = require('parameter');
const { ParameterException } = require('../../util/http-exception')

const parameter = new Parameter({
    validateRoot: true, // restrict the being validate value must be a object
});


const validateFindComentsById = async (ctx, next) => {
    const rule = {
        page: 'number',
        articleId: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);

    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateInsertSubComments = async (ctx, next) => {
    const rule = {
        commentId: 'string',
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

const validateAddComments = async (ctx, next) => {
    const rule = {
        content: 'string',
        articleId: 'string',
        author: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateDeleteComments = async (ctx, next) => {
    const rule = {
        articleId: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

module.exports = {
    validateFindComentsById,
    validateInsertSubComments,
    validateAddComments,
    validateDeleteComments
}
