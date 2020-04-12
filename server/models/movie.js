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
    introduction: { type: String }
})

const Movie = mongoose.model('movies', MovieSchema);
module.exports = Movie
