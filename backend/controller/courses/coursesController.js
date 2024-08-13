const courseModel = require("../../models/courses");
const subCategoryModel = require("../../models/subCategory");
const upload =require("../../middleware/fileUpload")

async function coursesController(req, res) {
    
    upload.single('image')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }

        const { name, price, sheet, description, subcategory } = req.body;
        let imagePath = null;

        if (req.file) {
            imagePath = req.file.path; // Get the path of the uploaded file
        }

        if (!name || !price || !subcategory) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            const course = new courseModel({ name, image: imagePath, price, sheet, description, subcategory });
            const savedCourse = await course.save();

            const subcat = await subCategoryModel.findById(subcategory);
            if (subcat) {
                subcat.items.push(savedCourse._id);
                await subcat.save();
            } else {
                return res.status(404).json({ message: 'Subcategory not found' });
            }

            res.status(201).json(savedCourse);
        } catch (error) {
            console.error('Error creating course:', error);
            res.status(500).json({ message: 'Error creating course', error });
        }
    });
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