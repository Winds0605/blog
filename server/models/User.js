const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userId: { type: String },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    avatar: { type: String }
})

const User = mongoose.model('user', UserSchema);
module.exports = User
