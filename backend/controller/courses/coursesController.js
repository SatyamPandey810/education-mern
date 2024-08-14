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
    const { categoryId, subCategoryId } = req.query;
    try {
        const query = {};
        if (categoryId) {
            query['subcategory.category'] = categoryId;
        }
        if (subCategoryId) {
            query.subcategory = subCategoryId;
        }

        const courses = await courseModel.find(query)
            .populate({
                path: 'subcategory',
                populate: {
                    path: 'category',
                    model: 'category' // Make sure this matches the category model name
                }
            });
        // .populate('Subcategory');

        const coursesWithFullImagePath = courses.map(course => {
            return {
                ...course._doc,  // Spread the original course object
                image: course.image ? `${req.protocol}://${req.get('host')}/uploads/${course.image}` : null
            };
        });

        res.status(200).json(coursesWithFullImagePath);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
};
module.exports = {
    coursesController,
    getAllCourses
}