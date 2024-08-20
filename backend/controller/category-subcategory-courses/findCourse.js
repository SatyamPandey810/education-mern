const courseModel = require("../../models/courses");
const mongoose = require('mongoose');
const findCoursesByCategoryAndSubcategory = async (req, res) => {
    const { categoryId, subcategoryId } = req.params;

    // try {
    //     // Find courses by the specified subcategory and category
    //     const courses = await courseModel.find({ subcategory: subcategoryId })
    //         .populate({
    //             path: 'subcategory',
    //             match: { category: categoryId }, 
    //             populate: { path: 'category', model: 'category' }
    //         })
    //         .exec();


    //     const filteredCourses = courses.filter(course => course.subcategory);


    //     if (filteredCourses.length === 0) {
    //         return res.status(404).json({ success: false, message: 'No courses found for the specified category and subcategory.' });
    //     }

    //     // Return the filtered courses
    //     res.status(200).json({ success: true, data: filteredCourses });
    // } catch (error) {
    //     console.error("Error finding courses:", error);
    //     res.status(500).json({ success: false, message: 'An error occurred while fetching courses.', error: error.message });
    // }
    try {
        // Validate and convert categoryId and subcategoryId to ObjectId
        if (!mongoose.Types.ObjectId.isValid(categoryId) || !mongoose.Types.ObjectId.isValid(subcategoryId)) {
            return res.status(400).json({ success: false, message: 'Invalid categoryId or subcategoryId.' });
        }

        const categoryObjectId = new mongoose.Types.ObjectId(categoryId);
        const subcategoryObjectId = new mongoose.Types.ObjectId(subcategoryId);

        // Find courses by the specified subcategory and category
        const courses = await courseModel.find({ subcategory: subcategoryObjectId })
            .populate({
                path: 'subcategory',
                match: { category: categoryObjectId },
                populate: { path: 'category', model: 'category' }
            })
            .exec();

        // Filter out any courses that don't match the populated subcategory
        const filteredCourses = courses.filter(course => course.subcategory);

        if (filteredCourses.length === 0) {
            return res.status(404).json({ success: false, message: 'No courses found for the specified category and subcategory.' });
        }

        // Return the filtered courses
        res.status(200).json({ success: true, data: filteredCourses });
    } catch (error) {
        console.error("Error finding courses:", error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching courses.', error: error.message });
    }
};
module.exports = findCoursesByCategoryAndSubcategory;