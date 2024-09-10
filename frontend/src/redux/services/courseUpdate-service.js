import { toast } from "react-toastify";
import summaryApi from "../../common"

const updateCourseServices = async (formData) => {
    try {
        const response = await fetch(summaryApi.updateCourse.url, {
            method: summaryApi.updateCourse.method,
            credentials: 'include',
            body: formData,
        });


        const contentType = response.headers.get('content-type');
        let responseData;
        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {

            throw new Error('Received non-JSON response');
        }

        if (responseData.success) {
            toast.success(responseData.message);
            return responseData;
        } else {
            toast.error(responseData.message || 'Failed to update course');
            return responseData;
        }
    } catch (error) {
        toast.error(error.message || 'An error occurred');
        return { success: false, message: error.message };
    }

}
export default updateCourseServices;