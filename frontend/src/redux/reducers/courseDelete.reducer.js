import { DELETE_CATEGORY_ERROR } from "../constants/courses/category-constants";
import { DELETE_COURSE_START, DELETE_COURSE_SUCCESS } from "../constants/courses/course-constants";

const initialState = {
    courses: []
}
const deleteCourseReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case DELETE_COURSE_START:
            return {
                ...state
            }

        case DELETE_COURSE_SUCCESS:
            return {
                ...state,
                courses: state.courses.filter(
                    (course) => course._id !== action.payload
                ),
            }
        case DELETE_CATEGORY_ERROR:
            return {
                ...state
            }

        default:
            return state
    }
}
export default deleteCourseReducer