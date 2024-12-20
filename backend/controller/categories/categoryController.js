const uploadProductPermission = require("../../helper/permission");
const categoryModel = require("../../models/categoryModel");
const subCategoryModel = require("../../models/subCategory")

async function uploadCategoryController(req, res) {
    try {
        const { name } = req.body;
        const category = new categoryModel({ name });
        await category.save();

        res.json({
            data: category,
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

        const categories = await categoryModel.find()
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving categories', error });
    }
};

// update categories
const updateCategoriesController = async (req, res) => {
    try {
        const { _id, ...resBody } = req.body
        const updateCategories = await categoryModel.findByIdAndUpdate(_id, resBody)
        res.json({
            data: updateCategories,
            message: "Category updated successfully",
            success: true,
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}

// delete category
const deleteCategoryController = async (req, res) => {
    try {
        const categoryId = req.body._id
        const deleteCategory = await categoryModel.deleteOne({ _id: categoryId })

        res.status(200).json({
            message: "Category deleted successfully",
            error: false,
            success: true,
            data: deleteCategory
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}



module.exports = {
    uploadCategoryController,
    getAllCategoriesController,
    updateCategoriesController,
    deleteCategoryController
}