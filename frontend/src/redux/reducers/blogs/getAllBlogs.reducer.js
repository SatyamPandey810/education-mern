import { BLOG_GET_ERROR, BLOG_GET_START, BLOG_GET_SUCCESS } from "../../constants/blog-constants";

const initialState = {
    allBlog: null
}
const getAllblogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_GET_START:
            return {
                ...state
            }
        case BLOG_GET_SUCCESS:
            return {
                ...state,
                allBlog: action.payload
            }
        case BLOG_GET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default getAllblogsReducer