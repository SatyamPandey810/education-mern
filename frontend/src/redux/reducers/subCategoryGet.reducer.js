import { SUBCATEGORY_GET_ERROR, SUBCATEGORY_GET_START, SUBCATEGORY_GET_SUCCESS } from "../constants/courses/subCategory-constants";

const initialState = {
    allSubCategory: null
}

const getAllSubCategoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUBCATEGORY_GET_START:
            return {
                ...state
            }
        case SUBCATEGORY_GET_SUCCESS:
            return {
                ...state,
                allSubCategory: action.payload
            }
        case SUBCATEGORY_GET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}
export default getAllSubCategoryReducer;