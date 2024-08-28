import { BLOG_GET_CATEGORY_AND_SUBCATEGORY_ERROR, BLOG_GET_CATEGORY_AND_SUBCATEGORY_START, BLOG_GET_CATEGORY_AND_SUBCATEGORY_SUCCESS } from "../../constants/blog-constants"

export const findBlogCategoryAndSubcategoryStart = (categoryId, subcategoryId) => ({
    type: BLOG_GET_CATEGORY_AND_SUBCATEGORY_START,
    payload: { categoryId, subcategoryId }

})
export const findBlogCategoryAndSubcategorySuccess = (blogs) => ({
    type: BLOG_GET_CATEGORY_AND_SUBCATEGORY_SUCCESS,
    payload: blogs

})
export const findBlogCategoryAndSubcategoryError = (error) => ({
    type: BLOG_GET_CATEGORY_AND_SUBCATEGORY_ERROR,
    payload: error

})