import { BLOG_UPLOAD_ERROR, BLOG_UPLOAD_START, BLOG_UPLOAD_SUCCESS } from "../../constants/blog-constants";

export const blogUploadStart = (blogData) => ({
    type: BLOG_UPLOAD_START,
    payload: blogData
})
export const blogUploadSuccess = (data) => ({
    type: BLOG_UPLOAD_SUCCESS,
    payload: data
})
export const blogUploadError = (error) => ({
    type: BLOG_UPLOAD_ERROR,
    payload: error
})