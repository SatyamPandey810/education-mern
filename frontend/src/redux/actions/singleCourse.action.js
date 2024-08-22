import { SINGLE_COURSE_ERROR, SINGLE_COURSE_START, SINGLE_COURSE_SUCCESS } from "../constants/courses/course-constants";

export const singleCourseStart = (id) => ({
    type: SINGLE_COURSE_START,
    payload: id
})

export const singleCourseSuccess = (course) => ({
    type: SINGLE_COURSE_SUCCESS,
    payload: course
})

export const singleCourseError = (error) => ({
    type: SINGLE_COURSE_ERROR,
    payload: error
})