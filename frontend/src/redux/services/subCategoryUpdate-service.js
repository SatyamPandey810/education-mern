const { toast } = require("react-toastify")
const { default: summaryApi } = require("../../common")


const updateSubCategoryService = async (subCategory) => {
    try {
        const response = await fetch(summaryApi.updateSubCategory.url, {
            method: summaryApi.updateSubCategory.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(subCategory)
        });
        const responseData = await response.json();
        
        if (responseData.success) {
            toast.success(responseData.message);
            return responseData;
        } else {
            toast.error(responseData.message || 'Failed to update category');
            return responseData;
        }
    } catch (error) {
        toast.error(error.message || 'An error occurred');
        return { success: false, message: error.message };
    }


}
export default updateSubCategoryService;