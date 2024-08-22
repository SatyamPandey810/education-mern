import { SINGLE_COURSE_ERROR, SINGLE_COURSE_START, SINGLE_COURSE_SUCCESS } from "../constants/courses/course-constants";

const initialState = {
    course: null
}
const singleCourseReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SINGLE_COURSE_START:
            return {
                ...state
            }
        case SINGLE_COURSE_SUCCESS:
            return {
                ...state,
                course: action.payload
            }
        case SINGLE_COURSE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default singleCourseReducer