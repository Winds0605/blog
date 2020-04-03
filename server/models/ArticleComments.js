const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleCommentSchema = new Schema({
    commentId: { type: String },
    articleId: { type: String },
    author: { type: String },
    avatar: { type: String },
    content: { type: String },
    sub: { type: Array, default: [] },
    modifyOn: { type: Date, default: Date.now },
})

const Model = mongoose.model('article_comment', ArticleCommentSchema);
module.exports = Model
