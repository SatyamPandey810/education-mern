import { GET_COURSE_ERROR, GET_COURSE_START, GET_COURSE_SUCCESS } from "../constants/courses/course-constants";

export const getAllCourseStart = () => ({
    type: GET_COURSE_START
})

export const getAllCourseSuccess = (allCourse) => ({
    type: GET_COURSE_SUCCESS,
    payload: allCourse

})
export const getAllCourseError = (error) => ({
    type: GET_COURSE_ERROR,
    payload: error
})