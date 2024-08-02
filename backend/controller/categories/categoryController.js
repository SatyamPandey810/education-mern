const uploadProductPermission = require("../../helper/permission");
const categoryModel = require("../../models/categoryModel");
const subCategoryModel = require("../../models/subCategory")

async function uploadCategoryController(req, res) {
    try {
        const sessionUserId = req.userId;

        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }

        const { name, subCategories } = req.body;
        const category = new categoryModel({ name, subCategories });
        await category.save();

        res.json({
            category,
            message: "Uploaded",
            success: true,
            error: false
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

// get all category
const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await categoryModel.find().populate('Subcategory');
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories', error });
    }
};


module.exports = {
    uploadCategoryController,
    getAllCategoriesController
}