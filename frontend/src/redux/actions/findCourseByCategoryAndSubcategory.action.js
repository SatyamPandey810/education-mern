import { FIND_COURSE_CATEGORY_SUBCATEGORY_ERROR, FIND_COURSE_CATEGORY_SUBCATEGORY_START, FIND_COURSE_CATEGORY_SUBCATEGORY_SUCCESS } from "../constants/courses/findCourseByCategoryAndSubcategory-constants";

export const findCourseCategoryAndSubcategoryStart = (payload) => ({
    type: FIND_COURSE_CATEGORY_SUBCATEGORY_START,
    payload

})
export const findCourseCategoryAndSubcategorySuccess = (courses) => ({
    type: FIND_COURSE_CATEGORY_SUBCATEGORY_SUCCESS,
    payload: courses

})
export const findCourseCategoryAndSubcategoryError = (error) => ({
    type: FIND_COURSE_CATEGORY_SUBCATEGORY_ERROR,
    payload: error

})