const { toast } = require("react-toastify")
const { default: summaryApi } = require("../../common")

const uploadCourseHandller = async (data) => {
    try {
        const resonse = await fetch(summaryApi.uploadCourse.url, {
            method: summaryApi.uploadCourse.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataResponse = await resonse.json()
        console.log(dataResponse);
        
        if (dataResponse.success) {
            toast.success(dataResponse.message)
            return dataResponse
        }

    } catch (error) {
        throw error;
    }
}

export default uploadCourseHandller;