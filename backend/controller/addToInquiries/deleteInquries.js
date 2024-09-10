const addToInquiryModel = require("../../models/addToInquiryModel")

const deleteinquriesController = async (req, res) => {
    try {
        const inquriesId = req.body._id
        const inquriesDeleted = await addToInquiryModel.deleteOne({ _id: inquriesId })

        res.status(200).json({
            data: inquriesDeleted,
            message: "inquries deleted successfully",
            error: false,
            success: true,
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}
module.exports = deleteinquriesController