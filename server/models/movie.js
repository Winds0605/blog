const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    movieId: { type: String },
    name: { type: String },
    image: { type: String },
    director: { type: String },
    country: { type: Array },
    type: { type: Array },
    rate: { type: Number },
    Introduction: { type: String },
    review: { type: String }
})

const Movie = mongoose.model('movie', MovieSchema);
module.exports = Movie
