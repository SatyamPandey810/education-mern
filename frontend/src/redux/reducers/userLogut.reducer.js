import { LOGOUT_USER_ERROR, LOGOUT_USER_START, LOGOUT_USER_SUCCESS } from "../constants/user-constants";

const initialState = {
    message: null
}

const logoutUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER_START:
            return {
                ...state
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                message: action.payload.message
            }
        case LOGOUT_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}
export default logoutUserReducer