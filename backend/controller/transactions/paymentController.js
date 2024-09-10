const userModel = require("../../models/userModel");
const initializeTransaction = require("./initializeTransaction");
const paymentModel = require("../../models/paymentModel");
const twilio = require("twilio");
const mongoose = require("mongoose");
const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
async function paymentController(req, res) {

    try {
        const { courseId, name, email, gender, phone, message, userId, amount, paymentMethod } = req.body;


        // Validate input
        if (!courseId || !amount || paymentMethod !== 'online') {
            return res.status(400).json({ success: false, message: 'Required fields are missing or invalid payment method' });
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
                userId,
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

        } else {
            return res.status(400).json({ success: false, message: 'Invalid payment method' });
        }

    } catch (error) {
        console.error('Payment processing error:', error.message || error);
        return res.status(500).json({ success: false, message: 'An internal server error occurred' });
    }

    // try {
    //     const { courseId, name, email, gender, phone, message, userId, amount, paymentMethod } = req.body;

    //     console.log("req body:", req.body);

    //     // Validate input
    //     if (!courseId || !amount || paymentMethod !== 'online') {
    //         return res.status(400).json({ success: false, message: 'Required fields are missing or invalid payment method' });
    //     }

    //     // Check if userId and courseId are valid ObjectId strings
    //     if (!mongoose.Types.ObjectId.isValid(userId)) {
    //         return res.status(400).json({ success: false, message: 'Invalid userId format' });
    //     }
    //     if (!mongoose.Types.ObjectId.isValid(courseId)) {
    //         return res.status(400).json({ success: false, message: 'Invalid courseId format' });
    //     }
    //     // console.log(newCourseId);

    //     if (paymentMethod === 'online') {
    //         const transactionDetails = {
    //             amount: amount * 100, // Convert to kobo
    //             email: email,
    //             callback_url: `${process.env.FRONTEND_URL}/success`,
    //         };

    //         const transaction = await initializeTransaction(transactionDetails);
    //         if (!transaction || !transaction.data || !transaction.data.authorization_url) {
    //             return res.status(500).json({ success: false, message: 'Failed to initialize transaction' });
    //         }

    //         // Convert userId and courseId to ObjectId
    //         const userObjectId = mongoose.Types.ObjectId(userId);
    //         const courseObjectId = mongoose.Types.ObjectId(courseId);

    //         const newTransaction = new paymentModel({
    //             userId: userObjectId,
    //             name,
    //             email,
    //             gender,
    //             phone,
    //             message,
    //             amount,
    //             reference: transaction.data.reference,
    //             access_code: transaction.data.access_code,
    //             authorization_url: transaction.data.authorization_url,
    //             courseId: courseObjectId,
    //             paymentMethod: 'online',
    //             status: 'pending'
    //         });

    //         await newTransaction.save();

    //         const smsMessage = `Hi ${name}, your payment for the course has been successfully initiated. Amount: ${amount}. Payment Reference: ${transaction.data.reference}.`;
    //         await client.messages.create({
    //             body: smsMessage,
    //             from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
    //             to: phone // User's phone number
    //         });

    //         return res.status(200).json({
    //             success: true,
    //             message: 'Transaction initialized',
    //             authorization_url: transaction.data.authorization_url
    //         });

    //     } else {
    //         return res.status(400).json({ success: false, message: 'Invalid payment method' });
    //     }

    // } catch (error) {
    //     console.error('Payment processing error:', error.message || error);
    //     return res.status(500).json({ success: false, message: 'An internal server error occurred' });
    // }
   
};

module.exports = paymentController