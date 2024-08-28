import summaryApi from "../../../common"

const deleteBlogService = async (id) => {
    const data = await fetch(summaryApi.deleteBlog.url, {
        method:summaryApi.deleteBlog.method,
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
        return responseData
    } else {
        return responseData.error
    }

}
export default deleteBlogService