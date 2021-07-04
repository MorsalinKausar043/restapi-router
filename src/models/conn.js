const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    event: {
        type: String,
        default: "100m"
    },
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "invalid name"],
        uppercase: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        uppercase: true,
        trim: true
    },
    score: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const MensList = new mongoose.model("MenList", menSchema);

module.exports = MensList;