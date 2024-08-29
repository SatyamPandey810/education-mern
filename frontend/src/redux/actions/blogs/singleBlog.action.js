import { SINGLE_BLOG_ERROR, SINGLE_BLOG_START, SINGLE_BLOG_SUCCESS } from "../../constants/blog-constants"

export const singleBlogStart = (id) => ({
    type: SINGLE_BLOG_START,
    payload: id
})

export const singleBlogSuccess = (blog) => ({
    type: SINGLE_BLOG_SUCCESS,
    payload: blog
})

export const singleBlogError = (error) => ({
    type: SINGLE_BLOG_ERROR,
    payload: error
})