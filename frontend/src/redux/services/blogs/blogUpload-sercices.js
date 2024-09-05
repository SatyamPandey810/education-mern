import summaryApi from "../../../common"

 const blogUploadHandller = async (blogData) => {
    const response = await fetch(summaryApi.courseCurriculumUpload.url, {
        method: summaryApi.courseCurriculumUpload.method,
        body: blogData
    })
    const dataResponse = await response.json()
    if (!response.ok) {
        throw new Error(dataResponse.message || 'Failed to upload course');
    }
    console.log(dataResponse);
    return dataResponse
    
};
export default blogUploadHandller