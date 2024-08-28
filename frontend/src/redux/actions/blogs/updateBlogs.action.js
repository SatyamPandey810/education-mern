import { BLOG_UPDATE_ERROR, BLOG_UPDATE_START, BLOG_UPDATE_SUCCESS } from "../../constants/blog-constants"

export const updateBlogStart = (formDataToSend) => ({
    type: BLOG_UPDATE_START,
    payload: formDataToSend
})
export const updateBlogSuccess = (message) => ({
    type: BLOG_UPDATE_SUCCESS,
    payload: message
})
export const updateBlogError = (error) => ({
    type: BLOG_UPDATE_ERROR,
    payload: error
})
