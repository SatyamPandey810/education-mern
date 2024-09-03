import { toast } from "react-toastify";
import summaryApi from "../../../common"

const initiatePaymentHandller = async (formData) => {
    try {
        const response = await fetch(summaryApi.paymentHandler.url, {
            method: summaryApi.paymentHandler.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                paymentMethod: 'online',
            }),
        });

        const responseData = await response.json();

        if (responseData.success && responseData.authorization_url) {
            return responseData.authorization_url; 
        } else {
            toast.error(responseData.message || 'Transaction failed!');
            throw new Error(responseData.message || 'Transaction failed!');
        }
    } catch (error) {
        console.error('Payment submission error:', error);
        toast.error(`An error occurred: ${error.message || 'Please try again.'}`);
        throw error;
    }
}
export default initiatePaymentHandller