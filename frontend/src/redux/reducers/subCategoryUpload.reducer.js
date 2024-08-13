import { SUBCATEGORY_UPLOAD_ERROR, SUBCATEGORY_UPLOAD_START, SUBCATEGORY_UPLOAD_SUCCESS } from "../constants/courses/subCategory-constants";

const initialState = {
    subCategory: []
}

const uploadSubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case SUBCATEGORY_UPLOAD_START:
            return {
                ...state
            }
        case SUBCATEGORY_UPLOAD_SUCCESS:
            return {
                ...state,
                subCategory: [...state.subCategory, action.payload]
            }
        case SUBCATEGORY_UPLOAD_ERROR:
            return {
                ...state,
                error: action.payload
            }


        default:
            return state
    }

}
export default uploadSubCategoryReducer
