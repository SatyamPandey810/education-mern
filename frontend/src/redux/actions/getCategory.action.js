import { GET_ALL_CATEGORY_ERROR, GET_ALL_CATEGORY_START, GET_ALL_CATEGORY_SUCCESS } from "../constants/courses/category-constants";

export const getAllCategoryStart = () => ({
    type: GET_ALL_CATEGORY_START
})
export const getAllCategorySuccess = (allCategory) => ({
    type: GET_ALL_CATEGORY_SUCCESS,
    payload: allCategory
})
export const getAllCategoryError = (error) => ({
    type: GET_ALL_CATEGORY_ERROR,
    payload: error
})