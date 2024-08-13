const backendDomain = "http://localhost:8080"

const summaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    login: {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    logout: {
        url: `${backendDomain}/api/logout`,
        method: "get"
    },
    userDetails: {
        url: `${backendDomain}/api/user-details`,
        method: "get"
    },
    getAllUser: {
        url: `${backendDomain}/api/all-user`,
        method: "get"
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: "post"
    },
    uploadCategory: {
        url: `${backendDomain}/api/category`,
        method: "post"
    },
    getCategory: {
        url: `${backendDomain}/api/get-category`,
        method: "get"
    },
    updateCategory: {
        url: `${backendDomain}/api/update-category`,
        method: "post"
    },
    uploadSubCategory: {
        url: `${backendDomain}/api/subcategory`,
        method: "post"
    },
    getSubCategory: {
        url: `${backendDomain}/api/get-subcategories`,
        method: "get"
    },
    uploadCourse: {
        url: `${backendDomain}/api/course`,
        method: "post"
    }


}
export default summaryApi