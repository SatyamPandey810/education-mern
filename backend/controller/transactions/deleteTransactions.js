const paymentModel = require("../../models/paymentModel")

const deleteTransactionController = async(req, res) => {
    try {
        const transactionId = req.body._id
 
        const deleteCourse=await paymentModel.deleteOne({})



    } catch (error) {

    }
}