const mongoose = require('mongoose')
const { Schema } = mongoose

const mutationSchema = new Schema({
    dna: { type: Array, required: true},
    mutation: { type: Boolean, required: true},
    date: {type: String, required: true}
});


module.exports = mongoose.model('Mutations2', mutationSchema)