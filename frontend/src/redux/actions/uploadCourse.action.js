import { COURSE_UPLOAD_ERROR, COURSE_UPLOAD_START, COURSE_UPLOAD_SUCCESS } from "../constants/courses/course-constants";

export const courseUploadStart = (courseData) => ({
    type: COURSE_UPLOAD_START,
    payload:courseData
})
export const courseUploadSuccess = (data) => ({
    type: COURSE_UPLOAD_SUCCESS,
    payload: data
})
export const courseUploadError = (error) => ({
    type: COURSE_UPLOAD_ERROR,
    payload: error
})