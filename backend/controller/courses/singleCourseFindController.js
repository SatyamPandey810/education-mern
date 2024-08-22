const courseModel = require("../../models/courses");

const singleCourseController = async (req, res) => {   
    try {
        const courseId = req.params.id; 
        const course = await courseModel.findById(courseId).populate('subcategory').exec();

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        const SinglecoursesWithFullImagePath = {
            ...course._doc,
            image: course.image ? `${req.protocol}://${req.get('host')}/uploads/${course.image}` : null
        };
        return res.status(200).json({ success: true, data: SinglecoursesWithFullImagePath });
    } catch (error) {
        console.error("Error finding course by ID:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}
module.exports = singleCourseController