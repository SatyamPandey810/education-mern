import { toast } from "react-toastify"
import summaryApi from "../../common"

const deleteCategoryService = async (id) => {
    const response = await fetch(summaryApi.deleteCategory.url, {
        method: summaryApi.deleteCategory.method,
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
export default deleteCategoryService;