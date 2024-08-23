import { toast } from "react-toastify"
import summaryApi from "../../common"

const addToInquiriesHandller = async (inquiryData) => {
    try {
        const response = await fetch(summaryApi.addToInquiry.url, {
            method: summaryApi.addToInquiry.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inquiryData),
        });

        const dataResponse = await response.json();

        if (response.ok && dataResponse.success) {
            toast.success(dataResponse.message);
            return dataResponse;
        } else {
            toast.error("Failed to submit inquiry.");
        }
    } catch (error) {
        toast.error("An error occurred while submitting the inquiry.");
        console.error("Error in addToInquiriesHandller:", error);
        throw error;
    }
}
export default addToInquiriesHandller