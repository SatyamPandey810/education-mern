import { GET_ALL_CATEGORY_ERROR, GET_ALL_CATEGORY_START, GET_ALL_CATEGORY_SUCCESS, UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../constants/courses/category-constants";

const initialState = {
    allCategory: null
}

const getAllCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY_START:
            return {
                ...state
            }
        case GET_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                allCategory: action.payload
            }
        case GET_ALL_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_CATEGORY_START:
            return {
                ...state
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                allCategory: state.allCategory.map(cat =>
                    cat._id === action.payload._id ? action.payload : cat
                )
            }
        case UPDATE_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }
}
export default getAllCategoryReducer
