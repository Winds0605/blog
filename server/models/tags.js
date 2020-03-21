const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TagsSchema = new Schema({
    tags: { type: Array },
})

const Tags = mongoose.model('tags', TagsSchema);
module.exports = Tags
