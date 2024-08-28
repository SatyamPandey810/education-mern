const { BLOG_UPDATE_ERROR, BLOG_UPDATE_START, BLOG_UPDATE_SUCCESS } = require("../../constants/blog-constants");

const initialState = {
    successMessage: null,
}
const updateBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_UPDATE_START:
            return {
                ...state
            }

        case BLOG_UPDATE_SUCCESS:
            return {
                ...state,
                successMessage: action.payload
            }
        case BLOG_UPDATE_ERROR:
            return {
                ...state,
                error: action.payload

            }
            default:
            return state
    }
}
export default updateBlogReducer