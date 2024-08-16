const { default: summaryApi } = require("../../common")

const deleteSubCategoryServices = async (id) => {
    const response = await fetch(summaryApi.deleteSubCategory.url, {
        method: summaryApi.deleteSubCategory.method,
        credentials: "include",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            _id: id,
        })
    })
    const responseData = response.json()
    if (responseData.success) {
        return responseData
    }
}

export default deleteSubCategoryServices