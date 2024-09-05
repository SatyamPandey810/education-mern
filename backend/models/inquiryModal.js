const mongoose = require("mongoose")

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    message: {
        type: String,
    }
}, { timestamps: true })

const inquiryModel = mongoose.model('inquiries', inquirySchema);
module.exports = inquiryModel
