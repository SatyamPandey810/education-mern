import summaryApi from "../../common"

const getCourseServices = async () => {
    const response = await fetch(summaryApi.getCourse.url, {
        method: summaryApi.getCourse.method,
        credentials: "include"
    })
    const data = await response.json()
    
    return data
}
export default getCourseServices