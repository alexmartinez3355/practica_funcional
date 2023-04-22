const {Schema, model} = require('mongoose');
const Character = require('./character');

const episodeSchema = new Schema({
    _id: String,
    name: String,
    air_date: String,
    episode: String,
    characters: [String],
    created: String
})

module.exports = model('Episode', episodeSchema)