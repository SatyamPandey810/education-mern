const mongoose = require("mongoose")

const addToInquirySchema = new mongoose.Schema({
    name: {
       type:String,
        required: true

    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message:{
        type:String
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }
},{ timestamps: true })
const addToInquiryModel = mongoose.model("inquiries", addToInquirySchema)
module.exports = addToInquiryModel