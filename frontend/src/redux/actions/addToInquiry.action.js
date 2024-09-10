import { INQUIRY_DELETE_ERROR, INQUIRY_DELETE_START, INQUIRY_DELETE_SUCCESS, INQUIRY_GET_ERROR, INQUIRY_GET_START, INQUIRY_GET_SUCCESS, INQUIRY_UPLOAD_ERROR, INQUIRY_UPLOAD_START, INQUIRY_UPLOAD_SUCCESS } from "../constants/inquries/addToInquiry-constants"

//upload inquiry
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

// get inquries
export const getInquiryStart = () => ({
    type: INQUIRY_GET_START,

})
export const getInquirySuccess = (inquires) => ({
    type: INQUIRY_GET_SUCCESS,
    payload: inquires
})
export const getInquiryError = (error) => ({
    type: INQUIRY_GET_ERROR,
    payload: error
})

//delete inquires
export const deleteInquiryStart = (id) => ({
    type: INQUIRY_DELETE_START,
    payload:id

})
export const deleteInquirySuccess = (id) => ({
    type: INQUIRY_DELETE_SUCCESS,
    payload: id
})
export const deleteInquiryError = (error) => ({
    type: INQUIRY_DELETE_ERROR,
    payload: error
})