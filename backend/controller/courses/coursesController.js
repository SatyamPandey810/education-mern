const courseModel = require("../../models/courses");
const subCategoryModel = require("../../models/subCategory");

async function coursesController(req, res) {
    try {
        const { name, image, price, sheet, description, subcategory } = req.body;
        const course = new courseModel({ name, image, price, sheet, description, subcategory });
        await course.save();

        // Add the course to the subcategory
        const subcat = await subCategoryModel.findById(subcategory);
        if (subcat) {
            subcat.items.push(course._id);
            await subcat.save();
        }

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
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