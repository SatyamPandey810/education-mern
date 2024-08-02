const subCategoryModel = require("../../models/subCategory");

async function subCategoryController(req, res) {
    try {
        const { name, items } = req.body;
        const subcategory = new subCategoryModel({ name, items });
        await subcategory.save();
        res.status(201).json(subcategory);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subcategories', error });
    }
}

// get all subcategory
const getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await subCategoryModel.find().populate('items');
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subcategories', error });
    }
};

module.exports = {
    subCategoryController,
    getAllSubcategories
}