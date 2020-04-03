const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieCommentSchema = new Schema({
    commentId: { type: String },
    movieId: { type: String },
    author: { type: String },
    avatar: { type: String },
    content: { type: String },
    sub: { type: Array, default: [] },
    modifyOn: { type: Date, default: Date.now },
})

const Model = mongoose.model('movie_comment', MovieCommentSchema);
module.exports = Model
