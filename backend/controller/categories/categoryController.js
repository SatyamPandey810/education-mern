const uploadProductPermission = require("../../helper/permission");
const categoryModel = require("../../models/categoryModel");
const subCategoryModel = require("../../models/subCategory")

async function uploadCategoryController(req, res) {
    try {
        // const sessionUserId = req.userId;

        // if (!uploadProductPermission(sessionUserId)) {
        //     throw new Error("Permission denied");
        // }

        const { name } = req.body;
        const category = new categoryModel({ name });
        await category.save();

        // if (subCategories && subCategories.length > 0) {
        //     const subCategoryDocs = await subCategoryModel.insertMany(
        //         subCategories.map(subCat => ({
        //             name: subCat,
        //             category: category._id
        //         }))
        //     );

        //     category.subCategories = subCategoryDocs.map(subCat => subCat._id);
        //     await category.save();
        // }

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
        // .populate('Subcategory');

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
            message: "Product updated successfully",
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



module.exports = {
    uploadCategoryController,
    getAllCategoriesController,
    updateCategoriesController
}