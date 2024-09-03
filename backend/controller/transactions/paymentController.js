const userModel = require("../../models/userModel");
const initializeTransaction = require("./initializeTransaction");
const paymentModel = require("../../models/paymentModel");

async function paymentController(req, res) {

    try {
        const { courseId, paymentMethod, name, email, gender, phone, message, userId, amount } = req.body;

        console.log("req body:", req.body);


        // Validate input
        if (!courseId || !paymentMethod || !amount ) {
            return res.status(400).json({ success: false, message: 'Required fields are missing' });
        }

        if (paymentMethod === 'online') {
            const transactionDetails = {
                amount: amount * 100, // Convert to kobo
                email: email,
                callback_url: `${process.env.FRONTEND_URL}/success`,
            };

            const transaction = await initializeTransaction(transactionDetails);
            if (!transaction || !transaction.data || !transaction.data.authorization_url) {
                return res.status(500).json({ success: false, message: 'Failed to initialize transaction' });
            }

            const newTransaction = new paymentModel({
                // userId,
                name,
                email,
                gender,
                phone,
                message,
                amount,
                reference: transaction.data.reference,
                access_code: transaction.data.access_code,
                authorization_url: transaction.data.authorization_url,
                courseId,
                paymentMethod: 'online',
                status: 'pending'
            });

            await newTransaction.save();

            return res.status(200).json({
                success: true,
                message: 'Transaction initialized',
                authorization_url: transaction.data.authorization_url
            });

        } else if (paymentMethod === 'cod') {
            const newTransaction = new paymentModel({
                // userId,
                name,
                email,
                gender,
                phone,
                message,
                amount,
                courseId,
                paymentMethod: 'cod',
                status: 'pending'
            });

            await newTransaction.save();

            return res.status(200).json({
                success: true,
                message: 'Order placed successfully with COD'
            });

        } else {
            return res.status(400).json({ success: false, message: 'Invalid payment method' });
        }

    } catch (error) {
        console.error('Payment processing error:', error.message || error);
        return res.status(500).json({ success: false, message: 'An internal server error occurred' });
    }
};

module.exports = paymentController