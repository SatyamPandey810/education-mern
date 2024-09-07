import { DELETE_COURSE_ERROR, DELETE_COURSE_START, DELETE_COURSE_SUCCESS } from "../constants/courses/course-constants"

export const deleteCourseStart = (id) => ({
    type: DELETE_COURSE_START,
    payload: id
})

export const deleteCourseSuccess = (id) => ({
    type: DELETE_COURSE_SUCCESS,
    payload: id
})
export const deleteCourseError = (error) => ({
    type: DELETE_COURSE_ERROR,
    payload: error
})