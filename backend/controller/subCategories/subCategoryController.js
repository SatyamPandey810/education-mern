const categoryModel = require("../../models/categoryModel");
const subCategoryModel = require("../../models/subCategory");

async function subCategoryController(req, res) {
    try {
        const { name, categoryIds } = req.body;

        // Validate that categoryIds are provided
        if (!categoryIds || categoryIds.length === 0) {
            return res.status(400).json({
                message: 'Category IDs are required',
                error: true,
                success: false
            });
        }

        // Check if all provided categories exist
        const categories = await categoryModel.find({ '_id': { $in: categoryIds } });
        if (categories.length !== categoryIds.length) {
            return res.status(400).json({
                message: 'One or more categories not found',
                error: true,
                success: false
            });
        }

        // Create and save the new subcategory
        const subcategory = new subCategoryModel({
            name,
            category: categoryIds
        });

        const savedSubcategory = await subcategory.save();

        res.status(201).json({
            message: 'Subcategory created successfully',
            data: savedSubcategory,
            success: true,
            error: false
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || 'An error occurred',
            error: true,
            success: false
        });
    }

}

// get all subcategory
const getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await subCategoryModel.find().populate('category');
        console.log("subcategory", subcategories);

        res.status(200).json({ data: subcategories });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subcategories', error: error.message });
    }
};

module.exports = {
    subCategoryController,
    getAllSubcategories
}