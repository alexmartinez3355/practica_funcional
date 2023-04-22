const {Schema, model} = require('mongoose');
const Character = require('./character');

const locationSchema = new Schema({
    _id: String,
    name: String,
    type: String,
    dimension: String,
    residents: [String],
    created: String
})

module.exports = model('Location', locationSchema)