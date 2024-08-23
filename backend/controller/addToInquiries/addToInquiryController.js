const addToInquiryModel = require("../../models/addToInquiryModel");
const courseModel = require("../../models/courses");

const addToInquiryController = async (req, res) => {
    try {
        const { courseId, name, email, phone, gender,message } = req?.body;

        const course = await courseModel.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Validate the course status
        if (course.status !== "Active") {
            return res.status(400).json({ message: "Cannot add inquiry. The course is not active." });
        }

        // If course is active, proceed to add the inquiry
        const newInquiry = new addToInquiryModel({
            name,
            email,
            phone,
            gender,
            message,
            courseId
        });

        const savedInquiry = await newInquiry.save();

        res.status(201).json({
            message: "Inquiry added successfully",
            data: savedInquiry,
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
module.exports = addToInquiryController;