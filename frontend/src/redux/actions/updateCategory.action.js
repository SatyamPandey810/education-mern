import { UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../constants/courses/category-constants"

export const updateCategoryStart = (category) => ({
    type: UPDATE_CATEGORY_START,
    payload: category
})

export const updateCategorySuccess = (updatedCategory) => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: updatedCategory
})

export const updateCategoryError = (error) => ({
    type: UPDATE_CATEGORY_ERROR,
    payload: error
})