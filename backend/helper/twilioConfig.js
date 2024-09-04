const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;  // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;    // Your Auth Token from www.twilio.com/console
const client = twilio(accountSid, authToken);

const sendPaymentConfirmationSMS = async (phone, courseName, amount) => {
    const message = `Dear customer, your purchase for the course "${courseName}" has been received. The payment amount is ${amount} units. Thank you!`;

    try {
        const sms = await client.messages.create({
            body: message,
            to: phone,  // User's phone number
            from: process.env.TWILIO_PHONE_NUMBER  // Your Twilio phone number
        });

        console.log(`SMS sent successfully with SID: ${sms.sid}`);
    } catch (error) {
        console.error('Failed to send SMS:', error.message);
    }
};

module.exports = sendPaymentConfirmationSMS;
