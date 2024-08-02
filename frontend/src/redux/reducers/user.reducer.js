import { GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS } from "../constants/user-constants";

// Initial state
const initialState = {
    user: null,
    loading: false,
    error: null
};

// Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
