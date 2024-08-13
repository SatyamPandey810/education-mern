import summaryApi from "../../common"

const getSubCategoryServices = async () => {
    const response = await fetch(summaryApi.getSubCategory.url, {
        method: summaryApi.getSubCategory.method,
        credentials: "include"
    })
    const data = response.json()
    return data
}

export default getSubCategoryServices;