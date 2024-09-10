const addToInquiryModel = require("../../models/addToInquiryModel");
const courseModel = require("../../models/courses");

const addToInquiryController = async (req, res) => {
    try {
        const { courseId, name, email, phone, gender, message } = req?.body;
      
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
            message: "Thanks for inqury",
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