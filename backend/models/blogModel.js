const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    heading: String,
    image: String,
    loaction: String,
    time: String,
    paragraph: String,
    subcategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }]
}, { timestamps: true })

const blogModel = mongoose.model("blogs", blogSchema)
module.exports = blogModel