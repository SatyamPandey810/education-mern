import { SUBCATEGORY_DELETE_ERROR, SUBCATEGORY_DELETE_START, SUBCATEGORY_DELETE_SUCCESS } from "../constants/courses/subCategory-constants";

export const deleteSubCategoryStart = (id) => ({
    type: SUBCATEGORY_DELETE_START,
    payload: id
})

export const deleteSubCategorySuccess = (id) => ({
    type: SUBCATEGORY_DELETE_SUCCESS,
    payload: id
})
export const deleteSubCategoryError = (error) => ({
    type: SUBCATEGORY_DELETE_ERROR,
    payload: error
})