const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticlesSchema = new Schema({
    articleId: { type: String },
    title: { type: String },
    content: { type: String },
    desc: { type: String },
    tag: { type: String },
    views: { type: Number, default: 0 },
    modifyOn: { type: Date, default: Date.now },
})

const Articles = mongoose.model('articles', ArticlesSchema);
module.exports = Articles
