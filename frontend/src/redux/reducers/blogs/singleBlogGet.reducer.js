import { SINGLE_BLOG_ERROR, SINGLE_BLOG_START, SINGLE_BLOG_SUCCESS } from "../../constants/blog-constants";

const initialState = {
    blog: []
}
const singleBlogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SINGLE_BLOG_START:
            return {
                ...state
            }
        case SINGLE_BLOG_SUCCESS:
            return {
                ...state,
                blog: action.payload
            }
        case SINGLE_BLOG_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default singleBlogReducer