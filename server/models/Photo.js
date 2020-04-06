const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    url: { type: String },
    height: { type: Number },
    width: { type: Number },
})

const Photos = mongoose.model('photo', PhotoSchema);
module.exports = Photos
