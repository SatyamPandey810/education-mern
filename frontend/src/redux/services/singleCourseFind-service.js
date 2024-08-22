import summaryApi from "../../common"

const findeSingleCourseService = async (courseId) => {
    try {
        const response = await fetch(`${summaryApi.singleCourseFind.url}/${courseId}`, {
            method: summaryApi.singleCourseFind.method,
            credentials: "include",
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch course data");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Service error:", error.message);
        throw error;
    }

}
export default findeSingleCourseService