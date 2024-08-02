const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    subCategories:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }]
}, { timestamps: true })

const categoryModel = mongoose.model("category", categorySchema)

module.exports = categoryModel