const paymentModel = require("../../models/paymentModel")

const findTransactionController = async (req, res) => {
    const { categoryId, subCategoryId } = req.query;

    try {
        const query = {};
        if (subCategoryId) {
            query['courseId.subcategory'] = subCategoryId;
        }

        if (categoryId) {
            query['courseId.subcategory.category'] = categoryId;
        }

        const totalTransactions = await paymentModel.find(query)
            .populate({
                path: 'courseId',
                populate: {
                    path: 'subcategory',
                    populate: {
                        path: 'category',
                        model: 'category'
                    }
                }
            });

        res.status(200).json(totalTransactions)

    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
}
module.exports = findTransactionController