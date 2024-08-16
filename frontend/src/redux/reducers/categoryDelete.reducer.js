import { DELETE_CATEGORY_ERROR, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS } from "../constants/courses/category-constants";

const initialState = {
    categories: []

}

const categoryDeleteReducer = (state = initialState, action) => {
    switch (action.payload) {
        case DELETE_CATEGORY_START:
            return { ...state }
        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category._id !== action.payload
                ),
            }
        case DELETE_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default categoryDeleteReducer
