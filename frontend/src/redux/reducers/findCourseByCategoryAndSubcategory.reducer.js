const { FIND_COURSE_CATEGORY_SUBCATEGORY_ERROR, FIND_COURSE_CATEGORY_SUBCATEGORY_START, FIND_COURSE_CATEGORY_SUBCATEGORY_SUCCESS } = require("../constants/courses/findCourseByCategoryAndSubcategory-constants");

const initialState = {
    courses: []
}
const findCourseByCategoryAndSubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_COURSE_CATEGORY_SUBCATEGORY_START:
            return {
                ...state
            }
        case FIND_COURSE_CATEGORY_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                courses: action.payload
            }
        case FIND_COURSE_CATEGORY_SUBCATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default findCourseByCategoryAndSubcategoryReducer;
