import summaryApi from "../../common"

export const uploadCategoryHandller = async (data) => {

    try {
        const response = await fetch(summaryApi.uploadCategory.url, {
            method: summaryApi.uploadCategory.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataResponse = await response.json();
        // console.log("Raw API Response:", dataResponse);

        if (dataResponse.success) {
            return dataResponse;
        } else {
            throw new Error(dataResponse.message || "Upload failed");
        }
    } catch (error) {
        console.error("Error in uploadCategoryHandller:", error.message);
        throw error;
    }
}