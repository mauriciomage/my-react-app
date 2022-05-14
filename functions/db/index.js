const mongoose = require('mongoose')
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db