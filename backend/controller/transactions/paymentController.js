const userModel = require("../../models/userModel");
const initializeTransaction = require("./initializeTransaction");
const paymentModel = require("../../models/paymentModel");

async function paymentController(req, res) {
    try {
        const { courseId, paymentMethod, name, email, gender, phone, message, amount, userId } = req.body;



        const totalAmount = amount;
        if (paymentMethod === "online") {
            // Set up transaction details for Paystack
            const transactionDetails = {
                amount: totalAmount * 100, // Convert to kobo
                email: email,
                callback_url: `${process.env.FRONTEND_URL}/success`,
            };
            console.log("transactionDetails", transactionDetails);

            // Initialize transaction
            const transaction = await initializeTransaction(transactionDetails);
            console.log("transaction", transaction);

            if (!transaction || !transaction.data || !transaction.data.authorization_url) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to initialize transaction."
                });
            }

            // Save transaction details in the database
            const newTransaction = new paymentModel({
                userId,
                name,
                email,
                gender,
                phone,
                message,
                amount: totalAmount,
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
                message: "Transaction initialized",
                authorization_url: transaction.data.authorization_url
            });

        } else if (paymentMethod === 'cod') {
            // Handle Cash on Delivery logic
            const newTransaction = new paymentModel({
                userId,
                name,
                email,
                gender,
                phone,
                message,
                amount: totalAmount,
                courseId,
                paymentMethod: 'cod',
                status: 'pending'
            });

            await newTransaction.save();
            return res.status(200).json({
                success: true,
                message: "Order placed successfully with COD"
            });

        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid payment method"
            });
        }

    } catch (error) {
        console.error('Payment error:', error);
        return res.status(500).json({
            success: false,
            message: error.message || "An error occurred while processing payment"
        });
    }
};

module.exports = paymentController