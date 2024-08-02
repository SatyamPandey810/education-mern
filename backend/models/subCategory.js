const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
}, { timestamps: true })

const subCategoryModel = new mongoose.model('Subcategory', subCategorySchema)
module.exports = subCategoryModel