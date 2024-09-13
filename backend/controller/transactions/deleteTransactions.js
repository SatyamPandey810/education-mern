const paymentModel = require("../../models/paymentModel")

const deleteTransactionController = async (req, res) => {
    try {
        const transactionId = req.body._id

        const deleteCourse = await paymentModel.deleteOne({ _id: transactionId })

        res.status(200).json({
            message: "Transactions deleted successfully",
            error: false,
            success: true,
            data: deleteCourse
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false

        })
    }
}
module.exports = deleteTransactionController