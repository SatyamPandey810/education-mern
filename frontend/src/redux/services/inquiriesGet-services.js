import summaryApi from "../../common"

const getAllInquiresServices = async () => {
    const data = await fetch(summaryApi.getAllInquries.url, {
        method: summaryApi.getAllInquries.method,
        credentials: "include"
    })
    const responseData = await data.json()
    return responseData
}
export default getAllInquiresServices