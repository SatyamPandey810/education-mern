const { BLOG_GET_CATEGORY_AND_SUBCATEGORY_START, BLOG_GET_CATEGORY_AND_SUBCATEGORY_SUCCESS, BLOG_GET_CATEGORY_AND_SUBCATEGORY_ERROR } = require("../../constants/blog-constants");

const initialState = {
    blogs: []
}
const getBlogsCategoryAndSubCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case BLOG_GET_CATEGORY_AND_SUBCATEGORY_START:
            return {
                ...state
            }
        case BLOG_GET_CATEGORY_AND_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                blogs: action.payload
            }

        case BLOG_GET_CATEGORY_AND_SUBCATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
           return state
    }

}
export default getBlogsCategoryAndSubCategoryReducer