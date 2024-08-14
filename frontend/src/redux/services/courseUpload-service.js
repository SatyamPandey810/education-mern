import summaryApi from "../../common";

const uploadCourseHandller = async (courseData) => {
    const response = await fetch(summaryApi.uploadCourse.url, {
        method: summaryApi.uploadCourse.method,
        body: courseData,
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Failed to upload course');
    }
    return data;
}

export default uploadCourseHandller;