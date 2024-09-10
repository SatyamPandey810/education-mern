const { toast } = require("react-toastify")
const { default: summaryApi } = require("../../common")

const deleteinquriesService = async (id) => {
    const data = await fetch(summaryApi.deleteInquries.url, {
        method: summaryApi.deleteInquries.method,
        credentials: "include",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            _id: id,
        })
    })
    const responseData = await data.json()
    if (responseData.success) {
        toast.success(responseData.message)
        return responseData
    }
}
export default deleteinquriesService