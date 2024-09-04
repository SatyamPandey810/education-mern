const paymentModel = require("../../models/paymentModel")

const findTransactionController = async (req, res) => {
    try {
        const totalTransactions = await paymentModel.find()
        res.status(200).json(totalTransactions)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
}
module.exports = findTransactionController