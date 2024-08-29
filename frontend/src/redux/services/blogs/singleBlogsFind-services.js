import summaryApi from "../../../common"

const sinleBlogFindService = async (blogId) => {
    const data = await fetch(`${summaryApi.singleBlogsFind.url}/${blogId}`, {
        method: summaryApi.singleBlogsFind.method,
        credentials: "include",
    })

    const responseData = await data.json()
    
    if (responseData.success) {
        return responseData
    }

}
export default sinleBlogFindService;