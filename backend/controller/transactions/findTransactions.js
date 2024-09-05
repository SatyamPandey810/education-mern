const paymentModel = require("../../models/paymentModel")

const findTransactionController = async (req, res) => {
    const { categoryId, subCategoryId } = req.query;

    try {
        const query = {};
        if (subCategoryId) {
            query['courseId.subcategory'] = subCategoryId;
        }

        // Filter by categoryId if provided
        if (categoryId) {
            query['courseId.subcategory.category'] = categoryId;
        }


        const totalTransactions = await paymentModel.find(query)
            .populate({
                path: 'courseId',  // Populate the courseId field
                populate: {
                    path: 'subcategory',  // Populate the subcategory field within courseId
                    populate: {
                        path: 'category',  // Populate the category field within subcategory
                        model: 'category'  // Ensure this matches your Category model name
                    }
                }
            });


        res.status(200).json(totalTransactions)
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
}
module.exports = findTransactionController