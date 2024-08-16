import { DELETE_CATEGORY_ERROR, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS } from "../constants/courses/category-constants";

export const deleteCategoryStart = (id) => ({
    type: DELETE_CATEGORY_START,
    payload: id
})
export const deleteCategorySuccess = (id) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: id
})
export const deleteCategoryError = (error) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error
})