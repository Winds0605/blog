const Parameter = require('parameter');
const { ParameterException } = require('../../util/http-exception')

const parameter = new Parameter({
    validateRoot: true, // restrict the being validate value must be a object
});


const validateFindCommentsById = async (ctx, next) => {
    const rule = {
        page: 'number',
        movieId: 'string'
    };
    const errors = parameter.validate(rule, ctx.request.body);

    if (errors) {
        ctx.body = new ParameterException(errors)
    } else {
        await next()
    }
}

module.exports = {
    validateFindCommentsById
}
