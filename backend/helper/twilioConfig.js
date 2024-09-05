require('dotenv').config();
const twilio = require('twilio');

// Initialize Twilio client with environment variables
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSMS = async (req, res) => {
    const { to, body } = req.body;

    try {
        const message = await client.messages.create({
            body: body,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to,
        });
        console.log("message SID:");

        res.status(200).json({
            success: true,
            message: `Message sent successfully! SID: ${message.sid}`,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Failed to send message. Error: ${error.message}`,
        });
    }
};
