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
    deleteCategory: {
        url: `${backendDomain}/api/delete-category`,
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
    updateSubCategory: {
        url: `${backendDomain}/api/update-subcategory`,
        method: "post"
    },
    deleteSubCategory: {
        url: `${backendDomain}/api/delete-subcategory`,
        method: "post"
    },
    uploadCourse: {
        url: `${backendDomain}/api/course`,
        method: "post"
    },
    getCourse: {
        url: `${backendDomain}/api/get-course`,
        method: "get"
    },
    updateCourse: {
        url: `${backendDomain}/api/update-course`,
        method: "post"
    },
    // findCourseBy: {
    //     url: `${backendDomain}/api/courses/:categoryId/:subcategoryId`,
    //     method: "get"
    // },
    findCourseBy: {
        url: `${backendDomain}/api/courses`,
        method: "get"
    },
    singleCourseFind: {
        url: `${backendDomain}/api/single-course`,
        method: "get"
    },
    addToInquiry: {
        url: `${backendDomain}/api/upload-inquiry`,
        method: "post"
    },
    blogUpload: {
        url: `${backendDomain}/api/blog-upload`,
        method: "post"
    },
    getBlogs: {
        url: `${backendDomain}/api/all-blogs`,
        method: "get"
    },
    updateBlog: {
        url: `${backendDomain}/api/update-blog`,
        method: "post"
    },
    deleteBlog: {
        url: `${backendDomain}/api/delete-blog`,
        method: "post"
    },
    findBlogBy: {
        url: `${backendDomain}/api/blogs`,
        method: "get"
    },
    singleBlogsFind: {
        url: `${backendDomain}/api/single-blog`,
        method: "get"
    },
    paymentHandler: {
        url: `${backendDomain}/api/payment-handller`,
        method: "post"
    },
    allPayment: {
        url: `${backendDomain}/api/get-payment`,
        method: "get"
    }




}
export default summaryApi