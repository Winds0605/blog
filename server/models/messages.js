const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    messageId: { type: String },
    author: { type: String },
    avatar: { type: String },
    content: { type: String },
    sub: { type: Array, default: [] },
    modifyOn: { type: Date, default: Date.now },
})

const Messages = mongoose.model('messages', MessageSchema);
module.exports = Messages
