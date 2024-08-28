import { BLOG_GET_ERROR, BLOG_GET_START, BLOG_GET_SUCCESS } from "../../constants/blog-constants";

export const getBlogStart = () => ({
    type: BLOG_GET_START,
})

export const getBlogSuccess = (allBlog) => ({
    type: BLOG_GET_SUCCESS,
    payload: allBlog
})
export const getBlogError = (error) => ({
    type: BLOG_GET_ERROR,
    payload: error
})