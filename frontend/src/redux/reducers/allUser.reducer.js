import { GET_ALL_USER_ERROR, GET_ALL_USER_START, GET_ALL_USER_SUCCESS } from "../constants/user-constants";

const initialState = {
    allUser: null
}
const allUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USER_START:
            return {
                ...state
            }
        case GET_ALL_USER_SUCCESS:
            return {
                ...state,
                allUser: action.payload
            }
        case GET_ALL_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default allUserReducer
