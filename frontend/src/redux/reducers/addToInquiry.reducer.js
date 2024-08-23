import { INQUIRY_UPLOAD_ERROR, INQUIRY_UPLOAD_START, INQUIRY_UPLOAD_SUCCESS } from "../constants/courses/addToInquiry-constants";

const initialState = {
    data: null
}
const addToinquiryReducer = (state = initialState, action) => {
    switch (action.type) {

        case INQUIRY_UPLOAD_START:
            return {
                ...state
            }
        case INQUIRY_UPLOAD_SUCCESS:
            return {
                ...state,
                data: action.payload
            }

        case INQUIRY_UPLOAD_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}
export default addToinquiryReducer