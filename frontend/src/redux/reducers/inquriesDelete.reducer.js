const { INQUIRY_DELETE_START, INQUIRY_DELETE_SUCCESS, INQUIRY_DELETE_ERROR } = require("../constants/inquries/addToInquiry-constants");

const initialState = {
    inquires: []
}

const inquriesDeleteReducer = (state = initialState, action) => {
    switch (action.payload) {
        case INQUIRY_DELETE_START:
            return {
                ...state
            }
        case INQUIRY_DELETE_SUCCESS:
            return {
                ...state,
                inquires: state.inquires.filter(
                    (inqury) => inqury._id !== action.payload
                ),
            }
        case INQUIRY_DELETE_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
         return state
    }
}
export default inquriesDeleteReducer