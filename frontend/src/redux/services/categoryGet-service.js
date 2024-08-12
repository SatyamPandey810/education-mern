import summaryApi from "../../common"

const getAllCategoryService = async () => {
    const response = await fetch(summaryApi.getCategory.url, {
        method: summaryApi.getCategory.method,
        credentials: "include"
    })
    const data = await response.json()
    return data
}
export default getAllCategoryService
