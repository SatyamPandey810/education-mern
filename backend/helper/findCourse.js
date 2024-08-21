const courseModel = require("../models/courses");
const subCategoryModel = require("../models/subCategory");
// const Category = require('./models/categoryModel');

const findCoursesByCategoryAndSubcategories = async (categoryId, subcategoryId) => {
    try {
        // Find subcategories with the given categoryId
        const subcategories = await subCategoryModel.find({ category: categoryId }).select('_id');
        const subcategoryIds = subcategories.map(sub => sub._id);

        // Find courses by subcategoryId
        const courses = await courseModel.find({
            subcategory: { $in: [subcategoryId] }  // This filters courses with the exact subcategoryId
        }).populate({
            path: 'subcategory',
            match: { _id: { $in: subcategoryIds } },
            populate: {
                path: 'category',
                match: { _id: categoryId }
            }
        });

        return courses;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching courses');
    }
};
module.exports = findCoursesByCategoryAndSubcategories;