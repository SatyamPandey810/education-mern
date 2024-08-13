import { SUBCATEGORY_UPLOAD_ERROR, SUBCATEGORY_UPLOAD_START, SUBCATEGORY_UPLOAD_SUCCESS } from "../constants/courses/subCategory-constants";

export const uploadSubCategoryStart = (subCategory) => ({
    type: SUBCATEGORY_UPLOAD_START,
    payload: subCategory
})

export const uploadSubCategorySuccess = (subCategory) => ({
    type: SUBCATEGORY_UPLOAD_SUCCESS,
    payload: subCategory
})

export const uploadSubCategoryError = (error) => ({
    type: SUBCATEGORY_UPLOAD_ERROR,
    payload: error
})