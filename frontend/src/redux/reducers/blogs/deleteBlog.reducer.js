import { BLOG_DELETE_ERROR, BLOG_DELETE_START, BLOG_DELETE_SUCCESS } from "../../constants/blog-constants";

const initialState = {
    blogs: []
}

const deleteBlogReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case BLOG_DELETE_START:
            return {
                ...state
            }

        case BLOG_DELETE_SUCCESS:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            }
        case BLOG_DELETE_ERROR:
            return {
                ...state,
                error: action.payload

            }

        default:
            return state
    }
}
export default deleteBlogReducer