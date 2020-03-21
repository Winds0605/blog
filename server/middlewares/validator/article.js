const Parameter = require('parameter');
const { ParameterException } = require('../../util/http-exception')

const parameter = new Parameter({
    validateRoot: true, // restrict the being validate value must be a object
});

const validateAdd = async (ctx, next) => {
    const rule = {
        title: 'string',
        content: 'string',
        desc: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);
    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

const validateId = async (ctx, next) => {
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

module.exports = {
    validateAdd,
    validateId
}
