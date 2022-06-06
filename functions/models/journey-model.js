const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Journey = new Schema(
    {
        team1: { type: String, required: true },
        team2: { type: String, required: true },
        date: { type: Date, required: true },
        hour: { type: String, required: true},
        group: { type: String, required: true },
        journey: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('journeys', Journey)