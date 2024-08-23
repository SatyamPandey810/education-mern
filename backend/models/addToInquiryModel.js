const mongoose = require("mongoose")

const addToInquirySchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }
})
const addToInquiryModel = mongoose.model("inquiries", addToInquirySchema)
module.exports = addToInquiryModel