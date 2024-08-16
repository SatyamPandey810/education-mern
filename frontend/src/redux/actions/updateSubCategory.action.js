import { SUBCATEGORY_UPDATE_ERROR, SUBCATEGORY_UPDATE_START, SUBCATEGORY_UPDATE_SUCCESS } from "../constants/courses/subCategory-constants";

export const subCategoryUpdateStart = (subCategory) => ({
    type: SUBCATEGORY_UPDATE_START,
    payload: subCategory
})
export const subCategoryUpdateSuccess = (updatedSubCategory) => ({
    type: SUBCATEGORY_UPDATE_SUCCESS,
    payload: updatedSubCategory
})
export const subCategoryUpdateError = (error) => ({
    type: SUBCATEGORY_UPDATE_ERROR,
    payloadL: error
})