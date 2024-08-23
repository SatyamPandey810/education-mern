import { INQUIRY_UPLOAD_ERROR, INQUIRY_UPLOAD_START, INQUIRY_UPLOAD_SUCCESS } from "../constants/courses/addToInquiry-constants";

export const uploadInquiryStart = (inquiryData) => ({
    type: INQUIRY_UPLOAD_START,
    payload: inquiryData
})
export const uploadInquirySuccess = (response) => ({
    type: INQUIRY_UPLOAD_SUCCESS,
    payload: response
})
export const uploadInquiryError = (error) => ({
    type: INQUIRY_UPLOAD_ERROR,
    payload: error
})