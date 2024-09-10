const addToInquiryModel = require("../../models/addToInquiryModel")

const getInquiriesController = async (req, res) => {
    try {
        const getAllInquries = await addToInquiryModel.find()
        res.status(200).json({
            message: "Get all inquries",
            error: false,
            success: true,
            data: getAllInquries
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}
module.exports = getInquiriesController