import { COURSE_UPLOAD_ERROR, COURSE_UPLOAD_START, COURSE_UPLOAD_SUCCESS } from "../constants/courses/course-constants";

export const courseUploadStart = (data) => ({
    type: COURSE_UPLOAD_START,
    payload:data
})
export const courseUploadSuccess = (course) => ({
    type: COURSE_UPLOAD_SUCCESS,
    payload: course
})
export const courseUploadError = (error) => ({
    type: COURSE_UPLOAD_ERROR,
    payload: error
})