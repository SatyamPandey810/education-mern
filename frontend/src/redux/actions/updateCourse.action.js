import { UPDATE_COURSE_ERROR, UPDATE_COURSE_START, UPDATE_COURSE_SUCCESS } from "../constants/courses/course-constants";

export const updateCourseStart = (courseData) => ({
    type: UPDATE_COURSE_START,
    payload: courseData
})
export const updateCourseSuccess = (message) => ({
    type: UPDATE_COURSE_SUCCESS,
    payload: message
})
export const updateCourseError = (error) => ({
    type: UPDATE_COURSE_ERROR,
    payload: error
})
