const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
        // type: String
    }]
}, { timestamps: true })

const subCategoryModel = new mongoose.model('Subcategory', subCategorySchema)
module.exports = subCategoryModel