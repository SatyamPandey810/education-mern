import { BLOG_UPLOAD_ERROR, BLOG_UPLOAD_START, BLOG_UPLOAD_SUCCESS } from "../../constants/blog-constants";

const initialState = {
    blogData: null
}
const blogUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_UPLOAD_START:
            return {
                ...state
            }
        case BLOG_UPLOAD_SUCCESS:
            return {
                ...state,
                blogData: action.payload
            }
        case BLOG_UPLOAD_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default blogUploadReducer