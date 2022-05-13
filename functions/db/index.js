const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://mmage:mjm37287266@expenses.bjomi.mongodb.net/magicprode?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db