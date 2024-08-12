import { toast } from "react-toastify"
import summaryApi from "../../common"

const updateCategoryServices = async () => {
    const data = await fetch(summaryApi.updateCategory.url, {
        method: summaryApi.updateCategory.method,
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const responseData = await data.json()
    if (responseData.success) {
        toast.success(responseData.message)
        return responseData
    }
}
export default updateCategoryServices