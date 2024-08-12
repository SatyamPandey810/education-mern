import { GET_CATEGORY_UPLOAD_ERROR, GET_CATEGORY_UPLOAD_START, GET_CATEGORY_UPLOAD_SUCCESS } from "../constants/courses/category-constants"

export const getCategoryUploadStart = (category) => ({
    type: GET_CATEGORY_UPLOAD_START,
    payload: category
})

export const getCategoryUploadSuccess = (category) => ({
    type: GET_CATEGORY_UPLOAD_SUCCESS,
    payload: category
})

export const getCategoryUploadError = (error) => ({
    type: GET_CATEGORY_UPLOAD_ERROR,
    payload: error
})