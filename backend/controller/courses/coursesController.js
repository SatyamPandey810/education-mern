const courseModel = require("../../models/courses");
const subCategoryModel = require("../../models/subCategory");
const upload = require("../../middleware/fileUpload")

async function coursesController(req, res) {
    try {
        const { name, price, sheet, description, subCategoryIds } = req.body;
        

        const image = req.file ? req.file.filename : null;


        const suCategories = await subCategoryModel.find({ '_id': { $in: subCategoryIds } });
        // if (suCategories.length !== subCategoryIds.length) {
        //     return res.status(400).json({
        //         message: 'One or more categories not found',
        //         error: true,
        //         success: false
        //     });
        // }

        const newCourse = new courseModel({
            name,
            image,
            price,
            sheet,
            description,
            subcategory: subCategoryIds
        });

        const savedCourse = await newCourse.save();

        res.status(201).json({
            message: 'Course uploaded successfully',
            success: true,
            data: savedCourse,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to upload course',
            success: false,
            error: error.message,
        });
    }
}


// get all courses

const getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.find().populate('Subcategory');
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
};
module.exports = {
    coursesController,
    getAllCourses
}