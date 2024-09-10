import { UPDATE_COURSE_ERROR, UPDATE_COURSE_START, UPDATE_COURSE_SUCCESS } from "../constants/courses/course-constants";

const initialState = {
    successMessage: '',
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
                successMessage: action.payload,
            }
        case UPDATE_COURSE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}
export default updateCourseReducer