const { GET_CATEGORY_UPLOAD_START, GET_CATEGORY_UPLOAD_SUCCESS, GET_CATEGORY_UPLOAD_ERROR } = require("../constants/courses/category-constants");

const initialState = {
    allCategory: []
}

const uploadCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_UPLOAD_START:
            return {
                ...state
            }
        case GET_CATEGORY_UPLOAD_SUCCESS:
            return {
                ...state,
                allCategory: [...state.allCategory, action.payload],
            }

        case GET_CATEGORY_UPLOAD_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}
export default uploadCategoryReducer