import { toast } from "react-toastify"
import summaryApi from "../../common"

const deleteCourseService = async (id) => {
    const data = await fetch(summaryApi.deleteCourse.url, {
        method: summaryApi.deleteCourse.method,
        credentials: "include",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            _id: id,
        })
    })
    const responseData = await data.json()
    console.log(responseData);
    
    if (responseData.success) {
        toast.success(responseData.message)
        return responseData
    }
}
export default deleteCourseService;