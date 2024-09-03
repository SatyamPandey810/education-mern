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
        console.log('responseData:', responseData);

        if (responseData.success && responseData.authorization_url) {
            window.location.href = responseData.authorization_url;
        } else {
            toast.error(responseData.message || 'Transaction failed!');
        }
    } catch (error) {
        console.error('Payment submission error:', error);
        toast.error(`An error occurred: ${error.message || 'Please try again.'}`);
    }
}
export default initiatePaymentHandller