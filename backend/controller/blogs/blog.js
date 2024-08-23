const blogModel = require("../../models/blogModel");
const subCategoryModel = require("../../models/subCategory");

const blogUploadController = async (req, res) => {
    try {
        const { heading, loaction, time, paragraph, status,price, subCategoryIds } = req.body;

        const image = req.file ? req.file.filename : null;

        const blogs = await subCategoryModel.find({ '_id': { $in: subCategoryIds } });
        const newBlogs = new blogModel({
            heading,
            image,
            loaction,
            time,
            paragraph,
            status,
            subCategoryIds: subCategoryIds
        })
        const saveBlogs = await newBlogs.save()

        res.status(201).json({
            data: saveBlogs,
            success: true,
            message: "Blog upload successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: 'Failed to upload course',
            success: false,
            error: error.message,
        });
    }
}
module.exports = blogUploadController