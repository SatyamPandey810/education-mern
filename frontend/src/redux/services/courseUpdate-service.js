import { toast } from "react-toastify";
import summaryApi from "../../common"

const updateCourseServices = async (course) => {
    try {
        const response = await fetch(summaryApi.updateCourse.url, {
            method: summaryApi.updateCourse.method,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(course),
        });

        const responseData = await response.json();
        console.log("Service Response:", responseData);

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