const {Schema, model} = require('mongoose');
const Episode = require('./episode');
const Location = require('./location');

const characterSchema = new Schema({
    _id: String,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    image: String,
    episode: [String],
    created: String 
})

module.exports = model('Character', characterSchema)