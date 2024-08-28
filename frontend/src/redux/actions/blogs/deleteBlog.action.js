import { BLOG_DELETE_ERROR, BLOG_DELETE_START, BLOG_DELETE_SUCCESS } from "../../constants/blog-constants"

export const deleteBlogStart = (id) => ({
    type: BLOG_DELETE_START,
    payload: id
})

export const deleteBlogSuccess = (id) => ({
    type: BLOG_DELETE_SUCCESS,
    payload: id
})
export const deleteBlogError = (error) => ({
    type: BLOG_DELETE_ERROR,
    payload: error
})