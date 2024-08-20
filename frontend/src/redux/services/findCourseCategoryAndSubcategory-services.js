const { default: summaryApi } = require("../../common")

const findCourseCategoryAndSubcategoryServices = async (categoryId, subcategoryId) => {
    try {
        const response = await fetch(`${summaryApi.findCourseBy.url.replace(':categoryId', categoryId).replace(':subcategoryId', subcategoryId)}`, {
            method: summaryApi.findCourseBy.method,
            credentials: "include",
            // headers: {
            //     'Content-Type': 'application/json',
            // }
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;  // Ensure you return the data so it can be used in the saga
    } catch (error) {
        throw new Error(error.message || 'Something went wrong');
    }
}
export default findCourseCategoryAndSubcategoryServices