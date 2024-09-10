import { INQUIRY_GET_ERROR, INQUIRY_GET_START, INQUIRY_GET_SUCCESS } from "../constants/inquries/addToInquiry-constants";

const initialState = {
    inquires: null
}
const getInquriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INQUIRY_GET_START:
            return {
                ...state
            }
        case INQUIRY_GET_SUCCESS:
            return {
                ...state,
                inquires: action.payload
            }

        case INQUIRY_GET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default getInquriesReducer