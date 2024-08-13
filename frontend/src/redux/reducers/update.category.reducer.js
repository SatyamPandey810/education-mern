import { UPDATE_CATEGORY_ERROR, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../constants/courses/category-constants";

const initialState = {
    updatedCategory: null
}
const updateCategoryreducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CATEGORY_START:
            return {
                ...state,
                updatedCategory: null,
            }
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                updatedCategory: action.payload || {},
 
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
export default updateCategoryreducer