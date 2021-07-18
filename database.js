const mongoose = require('mongoose')

const URI = process.env.DB_URL || 'mongodb://localhost/Mutation' 

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))

module.exports = mongoose