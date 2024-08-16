import { toast } from "react-toastify"
import summaryApi from "../../common"

const updateCategoryServices = async (category) => {
    try {
        const response = await fetch(summaryApi.updateCategory.url, {
            method: summaryApi.updateCategory.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(category)
        });

        const responseData = await response.json();
        console.log("API full response data:", responseData);

        if (responseData.success) {
            toast.success(responseData.message);
            return responseData; 
        } else {
            toast.error(responseData.message || 'Failed to update category');
            return responseData;
        }
    } catch (error) {
        toast.error(error.message || 'An error occurred');
        console.log("API error:", error);
        return { success: false, message: error.message };
    }
}
export default updateCategoryServices