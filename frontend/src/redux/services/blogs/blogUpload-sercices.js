import summaryApi from "../../../common"

 const blogUploadHandller = async (blogData) => {
    const response = await fetch(summaryApi.blogUpload.url, {
        method: summaryApi.blogUpload.method,
        body: blogData
    })
    const dataResponse = await response.json()
    if (!response.ok) {
        throw new Error(dataResponse.message || 'Failed to upload course');
    }
    return dataResponse
    
};
export default blogUploadHandller