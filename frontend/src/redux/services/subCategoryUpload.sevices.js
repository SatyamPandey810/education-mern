import summaryApi from "../../common"
import { toast } from 'react-toastify';

const uploadSubCategoryHandler = async (data) => {
    const response = await fetch(summaryApi.uploadSubCategory.url, {
        method: summaryApi.uploadSubCategory.method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const dataResonse = await response.json()
    if (dataResonse.success) {
        toast.success(dataResonse.message)
        return dataResonse
    }
    else {
        toast.error(dataResonse.message)
    }
}
export default uploadSubCategoryHandler