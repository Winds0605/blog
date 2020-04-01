const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagsSchema = new Schema({
    type: { type: String },
})

const movieTags = mongoose.model('article_tags', TagsSchema);
module.exports = movieTags
