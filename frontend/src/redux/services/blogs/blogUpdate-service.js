import { toast } from "react-toastify";
import summaryApi from "../../../common"

const updateBlogHandller = async (formData) => {
    try {
        const response = await fetch(summaryApi.updateBlog.url, {
            method: summaryApi.updateBlog.method,
            credentials: 'include',
            // headers: {
            //     "Content-Type": "application/json",
            // },
            body: formData,
        });
        const responseData = await response.json()
        console.log(responseData);
        
        if (responseData.success) {
            toast.success(responseData.message)
            return responseData
        } else {
            toast.error(responseData.message || 'Failed to update course');
            return responseData;
        }
    } catch (error) {
        toast.error(error.message || 'An error occurred');
        return { success: false, message: error.message };
    }
}
export default updateBlogHandller