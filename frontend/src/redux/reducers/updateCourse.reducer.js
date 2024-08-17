import { UPDATE_COURSE_ERROR, UPDATE_COURSE_START, UPDATE_COURSE_SUCCESS } from "../constants/courses/course-constants";

const initialState = {
    course: null,
}

const updateCourseReducer = (state = initialState, action) => {
    switch (action.payload) {
        case UPDATE_COURSE_START:
            return {
                ...state
            }
        case UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                course: action.payload,
            }
        case UPDATE_COURSE_ERROR:
            return {
                ...state
            }

        default:
            return state
    }
}
export default updateCourseReducer