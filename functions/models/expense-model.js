const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Expense = new Schema(
    {
        title: { type: String, required: true },
        amount: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('expenses', Expense)