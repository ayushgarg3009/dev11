const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Resume = new Schema(
    {
        name: { type: String, required: true },
        skinCd: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('resumes', Resume)
