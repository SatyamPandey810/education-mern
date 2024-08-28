import summaryApi from "../../../common"

const getAllBlogService = async () => {
    const response = await fetch(summaryApi.getBlogs.url, {
        method: summaryApi.getBlogs.method,
        credentials: "include"
    })
    const data = await response.json()
        return data
}
export default getAllBlogService