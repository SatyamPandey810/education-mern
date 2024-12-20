const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true

    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    sheet: {
        type: String
    },
    instructor:{
        type: String
    },
    duration:{
        type: String
    },
    lectures:{
        type:String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }]
}, { timestamps: true })

const courseModel = mongoose.model("Courses", courseSchema)
module.exports = courseModel