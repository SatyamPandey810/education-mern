import { SUBCATEGORY_GET_ERROR, SUBCATEGORY_GET_START, SUBCATEGORY_GET_SUCCESS } from "../constants/courses/subCategory-constants";

export const getSubCategoryStart = () => ({
    type: SUBCATEGORY_GET_START
})
export const getSubCategorySuccess = (allSubCategory) => ({
    type: SUBCATEGORY_GET_SUCCESS,
    payload: allSubCategory

})
export const getSubCategoryError = (error) => ({
    type: SUBCATEGORY_GET_ERROR,
    payload: error
})


