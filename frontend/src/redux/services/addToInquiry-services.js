import { toast } from "react-toastify"
import summaryApi from "../../common"

const addToInquiriesHandller = async (data) => {
    const response = await fetch(summaryApi.addToInquiry.url, {
        method: summaryApi.addToInquiry.method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const dataResonse = await response.json()
    if (dataResonse.success) {
        toast.success(dataResonse.message)
        return dataResonse
    } else {
        toast.error(dataResonse.message)
    }
}
export default addToInquiriesHandller