const courseModel = require("../../models/courses");
const subCategoryModel = require("../../models/subCategory");
const upload = require("../../middleware/fileUpload")

async function coursesController(req, res) {
    try {
        const { name, price, sheet, instructor, duration, lectures, description, status, subCategoryIds } = req.body;
        const image = req.file ? req.file.filename : null;

        const suCategories = await subCategoryModel.find({ '_id': { $in: subCategoryIds } });
        const newCourse = new courseModel({
            name,
            image,
            price,
            sheet,
            instructor,
            duration,
            lectures,
            description,
            status,
            subcategory: subCategoryIds
        });

        const savedCourse = await newCourse.save();

        res.status(201).json({
            message: 'Course uploaded successfully',
            success: true,
            data: savedCourse,
        });
    } catch (error) {
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
                    model: 'category'
                }
            });

        const coursesWithFullImagePath = courses.map(course => {
            return {
                ...course._doc,
                image: course.image ? `${req.protocol}://${req.get('host')}/uploads/${course.image}` : null
            };
        });

        res.status(200).json(coursesWithFullImagePath);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
};

const updateCourseController = async (req, res) => {
    try {

        const { _id, ...resBody } = req.body
        if (req.file) {
            resBody.image = req.file.filename; // Store the filename or path in the database
        }

        const updateCourse = await courseModel.findByIdAndUpdate(_id, { $set: resBody }, { new: true });

        res.json({
            data: updateCourse,
            success: true,
            error: false,
            message: "Course updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

const courseDeleteController = async (req, res) => {
    try {
        const courseId = req.body._id
        const deletecourse = await courseModel.deleteOne({ _id: courseId })

        res.status(200).json({
            message: "course deleted successfully",
            error: false,
            success: true,
            data: deletecourse
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
    coursesController,
    getAllCourses,
    updateCourseController,
    courseDeleteController
}