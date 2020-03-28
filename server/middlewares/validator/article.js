const Parameter = require('parameter');
const { ParameterException } = require('../../util/http-exception')

const parameter = new Parameter({
    validateRoot: true, // restrict the being validate value must be a object
});

const validateAdd = async (ctx, next) => {
    const rule = {
        title: 'string',
        content: 'string',
        desc: 'string',
        banner: 'string',
        tag: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateFindById = async (ctx, next) => {
    const rule = {
        articleId: 'string',
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
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
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

module.exports = {
    validateAdd,
    validateFindById,
    validateEdit
}
