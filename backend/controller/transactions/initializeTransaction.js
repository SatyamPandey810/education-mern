const axios = require('axios');
require('dotenv').config();

const initializeTransaction = async (transactionDetails) => {
    
    const url = 'https://api.paystack.co/transaction/initialize'
    const headers = {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
    };
    try {
        const response = await axios.post(url, transactionDetails, { headers })        
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = initializeTransaction